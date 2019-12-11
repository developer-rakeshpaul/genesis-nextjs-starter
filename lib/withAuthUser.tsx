import React from 'react'
import { authenticate } from './auth'
import { isServer } from 'utils'
import { redirectTo } from './redirect'

const withAuthUser = (Page: any) => {
  console.log('inside withAuthUser')
  const WithAuthUser = (props: any) => {
    if (!isServer) {
      console.log('WithAuthUser props: ', props.user)
    }
    return <Page {...props} />
  }

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName = Page.displayName || Page.name || 'Component'

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.')
    }

    WithAuthUser.displayName = `withAuthUser(${displayName})`
  }

  WithAuthUser.getInitialProps = async (ctx: any) => {
    console.log('inside withAuthUser getInitialProps')
    const { token, user } = (await authenticate(ctx)) || {}

    console.log('WithAuthUser.getInitialProps: ', user)
    const redirectPaths = ['/login', '/forgot-password', '/reset-password']
    if (user && redirectPaths.includes(ctx.pathname)) {
      redirectTo('/dashboard', { res: ctx.res, status: 301 })
    }
    const componentProps =
      Page.getInitialProps && (await Page.getInitialProps(ctx))

    return { ...componentProps, token, user }
  }
  return WithAuthUser
}

export { withAuthUser }
