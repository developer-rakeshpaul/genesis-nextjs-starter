import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from 'apollo-boost'
import { ApolloLink, concat } from 'apollo-link'
import { onError } from 'apollo-link-error'
import fetch from 'isomorphic-unfetch'
import get from 'lodash.get'

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null
const isBrowser = typeof window !== 'undefined'

const appJWTToken: string | null = null

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  // @ts-ignore
  global.fetch = fetch
}

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */
function createApolloClient(initialState: any = {}) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient

  const logoutLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ extensions }) => {
        console.log(extensions)
        if (extensions && extensions.code === 'invalid-jwt') {
          // logout()
        }
      })
    }
    if (networkError && get(networkError, 'statusCode') === 401) {
      // logout()
    }
  })

  const authMiddleware = new ApolloLink((operation, forward) => {
    if (appJWTToken) {
      operation.setContext({
        headers: {
          Authorization: `Bearer ${appJWTToken}`
        }
      })
    }
    return forward(operation)
  })

  const apiLink = new HttpLink({
    uri:
      process.env.NODE_ENV === 'production'
        ? 'https://server.genesis.com/graphql'
        : 'http://localhost:4000/graphql',
    credentials: 'include'
    // fetch: !isBrowser && fetch
  })

  const hasuraLink = new HttpLink({
    uri:
      process.env.NODE_ENV === 'production'
        ? 'https://hasura.genesis.com/graphql'
        : 'http://localhost:9090/v1/graphql',
    credentials: 'include'
    // fetch: !isBrowser && fetch
  })

  const httpLink = ApolloLink.split(
    operation => operation.getContext().clientName === 'hasura', // Routes the query to the proper client
    hasuraLink,
    apiLink
  )

  const client = new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: logoutLink.concat(concat(authMiddleware, httpLink)),

    cache: new InMemoryCache().restore(initialState || {})
  })
  return client
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
export function initApolloClient(initialState: any = {}) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return createApolloClient(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createApolloClient(initialState)
  }

  return apolloClient
}
