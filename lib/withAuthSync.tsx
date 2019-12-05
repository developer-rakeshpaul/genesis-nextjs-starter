import nextCookie from 'next-cookies'
import Router from 'next/router'
import React from 'react'
import { getRefreshTokenUrl, isServer } from 'utils'
import { getAccessToken, setAccessToken } from './accessToken'

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
  console.log('inside withAuthSync')
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

  return WithAuthSync
}

async function authenticate(ctx: any) {
  /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no token it means the user is not logged in.
   */
  if (!getAccessToken()) {
    try {
      let header = {}
      if (isServer) {
        const { gid } = nextCookie(ctx.ctx)
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
        console.log(
          `WithAuthSync.authenticate > isServer=${isServer} token=${!!token}`
        )
        setAccessToken(token)
      } else {
        const error = new Error(response.statusText)
        // console.error('response', await response.json())
        throw error
      }
    } catch (error) {
      console.log(error)
      // redirect(ctx, '/login')
    }
  }
  return getAccessToken()
}

export { login, logout, authenticate }
