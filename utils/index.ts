export const getApiUrl = () => {
  return `${process.env.API_PROTOCOL}://${process.env.API_HOST}`
}
export const getRefreshTokenUrl = () => {
  return `${getApiUrl()}/${process.env.API_REFRESH_TOKEN_PATH}`
}

export const isServer = typeof window === 'undefined'
