import nextCookie from 'next-cookies'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import React from 'react'
import { getRefreshTokenUrl, isServer } from 'utils'
import { getAccessToken, setAccessToken } from './accessToken'
import { initApolloClient } from './initApollo'
import { ApolloProvider } from '@apollo/react-hoc'

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */
export function withApollo(PageComponent: any, { ssr = true } = {}) {
  console.log('Inside withApollo HOC', new Date())
  const WithApollo = ({
    apolloClient,
    apolloState,
    serverAccessToken,
    ...pageProps
  }: any) => {
    console.log('Inside WithApollo component', new Date())
    if (!isServer && !getAccessToken()) {
      setAccessToken(serverAccessToken)
    }
    const client = apolloClient || initApolloClient(apolloState)
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    )
  }

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName =
      PageComponent.displayName || PageComponent.name || 'Component'

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.')
    }

    WithApollo.displayName = `withApollo(${displayName})`
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx: any) => {
      console.log('inside WithApolloComponent getInitial Props', new Date())
      const { AppTree } = ctx

      let serverAccessToken = ''

      if (isServer) {
        const { gid } = nextCookie(ctx)
        if (gid) {
          const response = await fetch(getRefreshTokenUrl(), {
            method: 'POST',
            credentials: 'include',
            headers: {
              cookie: 'gid=' + gid
            }
          })
          const data = await response.json()
          serverAccessToken = data.token
        }
      }
      // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.
      // eslint-disable-next-line require-atomic-updates
      const apolloClient = (ctx.apolloClient = initApolloClient(
        {},
        serverAccessToken
      ))

      // Run wrapped getInitialProps methods
      let pageProps = {}
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx)
      }

      // Only on the server:
      if (typeof window === 'undefined') {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps
        }

        // Only if ssr is enabled
        if (ssr) {
          try {
            // Run all GraphQL queries
            const { getDataFromTree } = await import('@apollo/react-ssr')
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient
                }}
              />
            )
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error)
          }

          // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually
          Head.rewind()
        }
      }

      // Extract query data from the Apollo store
      const apolloState = apolloClient.cache.extract()

      return {
        ...pageProps,
        apolloState,
        serverAccessToken
      }
    }
  }

  return WithApollo
}
