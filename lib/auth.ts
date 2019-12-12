import { AuthPayload } from './api-graphql'
import nextCookie from 'next-cookies'
import { isServer, getRefreshTokenUrl } from 'utils'

export const authenticate = async (ctx: any): Promise<AuthPayload | null> => {
  /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no token it means the user is not logged in.
   */
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
      return await response.json()
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}
