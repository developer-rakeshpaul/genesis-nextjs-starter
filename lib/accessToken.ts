let accessToken: string | null = null

export const setAccessToken = (s: string | null) => {
  accessToken = s
}

export const getAccessToken = () => {
  return accessToken
}
