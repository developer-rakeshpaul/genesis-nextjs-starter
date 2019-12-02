import { NextPageContext } from 'next'
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost'

export interface NextContextWithApollo extends NextPageContext {
  apolloClient: ApolloClient<NormalizedCacheObject>
}
