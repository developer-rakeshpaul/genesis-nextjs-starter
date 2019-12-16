export const getApiUrl = () => {
  return `${process.env.API_PROTOCOL}://${process.env.API_HOST}`
}
export const getRefreshTokenUrl = () => {
  return `${getApiUrl()}/${process.env.API_REFRESH_TOKEN_PATH}`
}

export const getGraphqlUrl = () => {
  return `${getApiUrl()}/graphql`
}

export const getHasuraGraphqlUrl = () => {
  return process.env.HASURA_URL || 'http://localhost:9090/v1/graphql'
}

export const isServer = typeof window === 'undefined'
