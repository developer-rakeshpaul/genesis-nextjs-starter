import { NextPageContext } from 'next'
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost'

export interface GenesisContext extends NextPageContext {
  apolloClient: ApolloClient<NormalizedCacheObject>
  token?: string
}
