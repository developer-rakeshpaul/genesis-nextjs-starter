import fetch from 'isomorphic-unfetch'
import { NextPage, NextPageContext } from 'next'
import nextCookie from 'next-cookies'
import Router from 'next/router'
import React from 'react'
import useInterval from 'hooks/useInterval'

interface MemoryToken {
  token: string
  expiry: Date
}

let inMemoryToken: MemoryToken | null

const login = (
  {
    jwt_token,
    jwt_token_expiry
  }: { jwt_token: string; jwt_token_expiry: Date },
  noRedirect: boolean
) => {
  inMemoryToken = {
    token: jwt_token,
    expiry: jwt_token_expiry
  }
  if (!noRedirect) {
    Router.push('/')
  }
}

const logout = async () => {
  inMemoryToken = null
  const url = '/api/logout'
  await fetch(url, {
    method: 'POST',
    credentials: 'include'
  })

  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now().toString())
  Router.push('/login')
}

// Gets the display name of a JSX component for dev tools
const getDisplayName = <P extends object>(Component: NextPage<P>) => {
  return Component.displayName || Component.name || 'Unknown'
}

const subMinutes = (dt: Date, minutes: number) => {
  return new Date(dt.getTime() - minutes * 60000)
}

export const withAuthSync = <P extends object>(Page: NextPage<P>) => {
  const WithAuthSync = (props: P) => {
    const syncLogout = (event: any) => {
      if (event.key === 'logout') {
        console.log('logged out from storage!')
        Router.push('/login')
      }
    }

    React.useEffect(() => {
      window.addEventListener('storage', syncLogout)
      useInterval(async () => {
        if (
          inMemoryToken &&
          subMinutes(new Date(inMemoryToken.expiry), 1) <=
            new Date(inMemoryToken.expiry)
        ) {
          inMemoryToken = null
        }
        if (!inMemoryToken) {
          const token = await auth(null)
          inMemoryToken = token
        }
      }, 60000)
      return () => {
        window.removeEventListener('storage', syncLogout)
        window.localStorage.removeItem('logout')
      }
    }, [])

    return <Page {...(props as P)} />
  }

  WithAuthSync.getInitialProps = async (ctx: NextPageContext) => {
    const token = auth(ctx)

    const componentProps =
      Page.getInitialProps && (await Page.getInitialProps(ctx))

    return { ...componentProps, token }
  }
  WithAuthSync.displayName = `WithAuthSync(${getDisplayName(Page)})`

  return WithAuthSync
}

async function auth(ctx: NextPageContext) {
  const { gid } = nextCookie(ctx)

  /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no token it means the user is not logged in.
   */
  if (!inMemoryToken) {
    const headers = ctx && ctx.req ? ctx.req.headers : {}

    const url = ''
    try {
      const response = await fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          // ctx.req.headers
          ...headers
        }),
        body: JSON.stringify({})
      })
      if (response.status === 200) {
        const {
          jwt_token,
          refresh_token,
          jwt_token_expiry,
          refresh_token_expiry
        } = await response.json()
        // setup httpOnly cookie if SSR
        if (ctx && ctx.res) {
          ctx.res.setHeader(
            'Set-Cookie',
            `gid=${refresh_token};HttpOnly;Max-Age=${refresh_token_expiry};Path="${process.env.API_REFRESH_TOKEN_PATH}"`
          )
        }
        await login({ jwt_token, jwt_token_expiry }, true)
      } else {
        const error = new Error(response.statusText)
        console.error(response)
        throw error
      }
    } catch (error) {
      console.log(error)
      if (ctx && ctx.res) {
        ctx.res.writeHead(302, { Location: '/login' })
        ctx.res.end()
      }
      Router.push('/login')
    }
  }

  const jwtToken = inMemoryToken

  // We already checked for server. This should only happen on client.
  if (!jwtToken) {
    Router.push('/login')
  }

  return jwtToken
}

function getToken() {
  return inMemoryToken
}

const getCurrentPath = (originalUrl: string) => {
  if (typeof window === 'object') {
    return window.location.host
  } else {
    return originalUrl
  }
}

export { login, logout, auth, getToken, getCurrentPath }
