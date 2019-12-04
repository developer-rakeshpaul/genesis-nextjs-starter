import { useMeQuery } from './api-graphql'

const getAuthUser = async () => {
  try {
    const { data } = await useMeQuery()
    console.log(data)
    return { loggedInUser: data }
  } catch (error) {
    // console.log('error', error)
    return { loggedInUser: null }
  }
}

export { getAuthUser }
