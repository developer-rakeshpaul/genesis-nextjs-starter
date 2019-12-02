import React from 'react'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import { initApolloClient } from './initApollo'
// import { NextContextWithApollo } from 'interfaces/withApolloContex'

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */
export function withApollo(PageComponent: any, { ssr = true } = {}) {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }: any) => {
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

  // Allow Next.js to remove getInitialProps from the browser build
  if (typeof window === 'undefined') {
    if (ssr) {
      WithApollo.getInitialProps = async (ctx: any) => {
        const { AppTree } = ctx

        // Run all GraphQL queries in the component tree
        // and extract the resulting data
        const apolloClient = initApolloClient()
        ctx.apolloClient = apolloClient

        let pageProps = {}

        if (PageComponent.getInitialProps) {
          pageProps = await PageComponent.getInitialProps(ctx)
        }
        try {
          // Run all GraphQL queries
          await require('@apollo/react-ssr').getDataFromTree(
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

        // Extract query data from the Apollo store
        const apolloState = apolloClient.cache.extract()

        return {
          ...pageProps,
          apolloState
        }
      }
    }
  }

  return WithApollo
}
