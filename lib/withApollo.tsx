import nextCookie from 'next-cookies'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import React from 'react'
import { getRefreshTokenUrl } from 'utils'
import { getAccessToken, setAccessToken } from './accessToken'
import { initApolloClient } from './initApollo'

const isServer = () => typeof window === 'undefined'

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */
export function withApollo(PageComponent: any, { ssr = true } = {}) {
  console.log('Inside withApollo')
  const WithApollo = ({
    apolloClient,
    serverAccessToken,
    apolloState,
    ...pageProps
  }: any) => {
    if (!isServer() && !getAccessToken()) {
      setAccessToken(serverAccessToken)
    }
    const client = apolloClient || initApolloClient(apolloState)
    return <PageComponent {...pageProps} apolloClient={client} />
  }

  if (process.env.NODE_ENV !== 'production') {
    // Find correct display name
    const displayName =
      PageComponent.displayName || PageComponent.name || 'Component'

    // Warn if old way of installing apollo is used
    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.')
    }

    // Set correct display name for devtools
    WithApollo.displayName = `withApollo(${displayName})`
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (context: any) => {
      const { AppTree, ctx } = context

      let serverAccessToken = ''

      if (isServer()) {
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

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      // tslint:disable-next-line:no-shadowed-variable
      const apolloClient = (context.ctx.apolloClient = initApolloClient(
        {},
        serverAccessToken
      ))

      const pageProps = PageComponent.getInitialProps
        ? await PageComponent.getInitialProps(context)
        : {}

      // Only on the server
      if (typeof window === 'undefined') {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return {}
        }

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
                apolloClient={apolloClient}
              />
            )
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            // console.error('Error while running `getDataFromTree`', error);
          }
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()
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
