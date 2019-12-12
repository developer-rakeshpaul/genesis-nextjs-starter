import Router from 'next/router'
import React from 'react'
import { setAccessToken } from './accessToken'
import { isServer } from 'utils'
import { redirectTo } from './redirect'
import { authenticate } from './auth'
import { useAuthUser } from 'store'

function login(token: string, noRedirect: boolean) {
  setAccessToken(token)
  if (!noRedirect) {
    Router.push('/dashboard')
  }
}

async function logout() {
  setAccessToken(null)
  // to support logging out from all windows
  if (!isServer) {
    window.localStorage.setItem('logout', Date.now().toString())
  }
  Router.push('/login')
}

export const withAuthSync = (PageComponent: any) => {
  const WithAuthSync = (props: any) => {
    const setUser = useAuthUser(store => store.setUser)
    if (props.user) {
      setUser(props.user)
    }
    const syncLogout = (event: any) => {
      if (event.key === 'logout') {
        Router.push('/login')
      }
    }

    React.useEffect(() => {
      window.addEventListener('storage', syncLogout)

      return () => {
        window.removeEventListener('storage', syncLogout)
        window.localStorage.removeItem('logout')
      }
    }, [])

    return <PageComponent {...props} />
  }

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName =
      PageComponent.displayName || PageComponent.name || 'Component'

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.')
    }

    WithAuthSync.displayName = `withAuthSync(${displayName})`
  }

  WithAuthSync.getInitialProps = async (ctx: any) => {
    const { token, user } = (await authenticate(ctx)) || {}

    if (!user) {
      redirectTo(`/login?redirect=${ctx.pathname}`, {
        res: ctx.res,
        status: 301
      })
    }
    const componentProps =
      PageComponent.getInitialProps &&
      (await PageComponent.getInitialProps(ctx))
    return { ...componentProps, token, user }
  }
  return WithAuthSync
}

export { login, logout }
