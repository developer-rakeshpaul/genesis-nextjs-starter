import React from 'react'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import { initApolloClient } from './initApollo'
// import { setAccessToken, getAccessToken } from './accessToken'
// import nextCookie from 'next-cookies'
// import { getRefreshTokenUrl, isServer } from 'utils'
import { NextContextWithApollo } from 'interfaces/withApolloContex'

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */
export function withApollo(PageComponent: any, { ssr = true } = {}) {
  const WithApollo = ({
    apolloClient,
    apolloState,
    // serverAccessToken,
    ...pageProps
  }: any) => {
    // if (!isServer && !getAccessToken()) {
    //   setAccessToken(get(pageProps, 'pageProps.token'))
    // }
    const client = React.useMemo(
      () => apolloClient || initApolloClient(apolloState),
      []
    )
    return (
      <ApolloProvider client={client}>
        <PageComponent apolloClient={client} {...pageProps} />
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
    WithApollo.getInitialProps = async (ctx: NextContextWithApollo) => {
      const { AppTree, res } = ctx

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apolloClient = (ctx.apolloClient = initApolloClient({}))

      const pageProps = PageComponent.getInitialProps
        ? await PageComponent.getInitialProps(ctx)
        : {}

      // Only on the server
      if (typeof window === 'undefined') {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (res && res.finished) {
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
            console.error('Error while running `getDataFromTree`', error)
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
        apolloState
        // serverAccessToken
      }
    }
  }

  return WithApollo
}
