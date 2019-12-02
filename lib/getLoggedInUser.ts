import { MeQuery } from './api-graphql'
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost'
import me from 'gql/api/me.gql'

const getLoggedInUser = async (
  apolloClient: ApolloClient<NormalizedCacheObject>
) => {
  try {
    const { data } = await apolloClient.query<MeQuery>({
      query: me,
      context: { clientName: 'api' }
    })
    console.log(data)
    return { loggedInUser: data }
  } catch (error) {
    // console.log('error', error)
    return { loggedInUser: null }
  }
}

export default getLoggedInUser
