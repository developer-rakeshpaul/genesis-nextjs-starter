// import { useMeQuery } from './api-graphql'
import React from 'react'
// import { useMeQuery } from './api-graphql'
import { MeQuery } from './api-graphql'
import { ApolloClient, NormalizedCacheObject, gql } from 'apollo-boost'
import get from 'lodash.get'

const me = gql`
  query Me {
    me {
      id
      name
      email
    }
  }
`
const getAuthUser = async (
  apolloClient: ApolloClient<NormalizedCacheObject>
) => {
  try {
    const response = await apolloClient.query<MeQuery>({
      query: me,
      context: { clientName: 'api' }
    })
    return get(response, 'data.me', null)
  } catch (error) {
    return null
  }
}

const withAuthUser = (Page: any) => {
  console.log('Inside withAuthUser')
  const WithAuthUser = (props: any) => <Page {...props} />

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName = Page.displayName || Page.name || 'Component'

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.')
    }

    WithAuthUser.displayName = `withAuthUser(${displayName})`
  }

  WithAuthUser.getInitialProps = async (ctx: any) => {
    const user = await getAuthUser(ctx.apolloClient)
    const componentProps =
      Page.getInitialProps && (await Page.getInitialProps(ctx))

    return { ...componentProps, user }
  }
  return WithAuthUser
}

export { getAuthUser, withAuthUser }
