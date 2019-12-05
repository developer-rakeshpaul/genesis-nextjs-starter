let accessToken: string | null | undefined = null

export const setAccessToken = (s: string | null | undefined) => {
  accessToken = s
}

export const getAccessToken = () => {
  return accessToken
}
