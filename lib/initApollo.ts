import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from 'apollo-boost'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { TokenRefreshLink } from 'apollo-link-token-refresh'
import fetch from 'isomorphic-unfetch'
import jwtDecode from 'jwt-decode'
import get from 'lodash.get'
import { getRefreshTokenUrl } from 'utils'
import { getAccessToken, setAccessToken } from './accessToken'

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null
const isServer = typeof window !== 'undefined'

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */
function createApolloClient(initialState: any = {}) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient

  const errorLink = onError(({ graphQLErrors, networkError }) => {
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

  const refreshLink = new TokenRefreshLink({
    accessTokenField: 'token',
    isTokenValidOrUndefined: () => {
      const token = getAccessToken()

      if (!token) {
        return true
      }

      try {
        const { exp } = jwtDecode(token)
        if (Date.now() >= exp * 1000) {
          return false
        } else {
          return true
        }
      } catch {
        return false
      }
    },
    fetchAccessToken: () => {
      return fetch(getRefreshTokenUrl(), {
        method: 'POST',
        credentials: 'include'
      })
    },
    handleFetch: (token: string) => {
      setAccessToken(token)
    },
    handleError: err => {
      console.warn('Your refresh token is invalid. Try to relogin')
      console.error(err)
    }
  })

  const authLink = setContext((_, { headers }) => {
    const token = getAccessToken()
    return {
      headers: {
        ...headers,
        authorization: token ? `bearer ${token}` : ''
      }
    }
  })

  const apiLink = new HttpLink({
    uri:
      process.env.NODE_ENV === 'production'
        ? 'https://server.genesis.com/graphql'
        : 'http://localhost:4000/graphql',
    credentials: 'include',
    fetch
  })

  const hasuraLink = new HttpLink({
    uri:
      process.env.NODE_ENV === 'production'
        ? 'https://hasura.genesis.com/graphql'
        : 'http://localhost:9090/v1/graphql',
    credentials: 'include',
    fetch
  })

  const httpLink = ApolloLink.split(
    operation => operation.getContext().clientName === 'hasura', // Routes the query to the proper client
    hasuraLink,
    apiLink
  )

  const client = new ApolloClient({
    connectToDevTools: !isServer,
    ssrMode: isServer, // Disables forceFetch on the server (so queries are only run once)
    link: ApolloLink.from([refreshLink, authLink, errorLink, httpLink]),

    cache: new InMemoryCache().restore(initialState || {})
  })
  return client
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
export function initApolloClient(
  initialState: any = {}
  // serverAccessToken?: string
) {
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
