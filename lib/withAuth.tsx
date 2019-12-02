import { NextContextWithApollo } from 'interfaces/withApolloContex'
import redirect from './redirect'
import getLoggedInUser from './getLoggedInUser'

const getInitialProps = async ({
  apolloClient,
  ...ctx
}: NextContextWithApollo) => {
  const response = await getLoggedInUser(apolloClient)
  if (!response || !response.loggedInUser) {
    redirect(ctx, '/')
    return {
      me: null
    }
  }

  return {
    me: response.loggedInUser
  }
}

export default getInitialProps
