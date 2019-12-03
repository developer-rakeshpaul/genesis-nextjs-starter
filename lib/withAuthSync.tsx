import React from 'react'
import Router from 'next/router'
import { NextPageContext } from 'next'
import { getRefreshTokenUrl, isServer } from 'utils'
import { setAccessToken, getAccessToken } from './accessToken'
import nextCookie from 'next-cookies'
import redirect from './redirect'

function login(token: string, noRedirect: boolean) {
  setAccessToken(token)
  if (!noRedirect) {
    Router.push('/dashboard')
  }
}

async function logout() {
  setAccessToken(null)

  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now().toString())
  Router.push('/login')
}

export const withAuthSync = (PageComponent: any) => {
  const WithAuthSync = (props: any) => {
    const syncLogout = (event: any) => {
      if (event.key === 'logout') {
        console.log('logged out from storage!')
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
    await authenticate(ctx)
    const componentProps =
      PageComponent.getInitialProps &&
      (await PageComponent.getInitialProps(ctx))

    return { ...componentProps, token: getAccessToken() }
  }

  return WithAuthSync
}

async function authenticate(ctx: NextPageContext) {
  /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no token it means the user is not logged in.
   */
  if (!getAccessToken()) {
    try {
      let header = {}
      if (isServer) {
        const { gid } = nextCookie(ctx)
        if (gid) {
          header = { ...header, cookie: 'gid=' + gid }
        }
      }
      const response = await fetch(getRefreshTokenUrl(), {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          ...header
        },
        body: JSON.stringify({})
      })
      if (response.status === 201) {
        const { token } = await response.json()
        await login(token, true)
      } else {
        const error = new Error(response.statusText)
        // console.error('response', await response.json())
        throw error
      }
    } catch (error) {
      redirect(ctx, '/login')
    }
  }
}

export { login, logout, authenticate }
