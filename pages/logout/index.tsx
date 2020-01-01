import React from 'react'
import { NextPage } from 'next'
import { withApollo } from 'lib/withApollo'
import Layout from 'layout/Layout'
import Loader from 'components/loader'
import { useLogoutMutation } from 'lib/api-graphql'
import { logout } from 'lib/withAuthSync'
import { useAuthUser } from 'store'

const Logout: NextPage = () => {
  const [logoutMutation] = useLogoutMutation()
  const setUser = useAuthUser(store => store.setUser)

  React.useEffect(() => {
    async function handleLogout() {
      try {
        await logoutMutation({
          fetchPolicy: 'no-cache',
        })
        setUser(null)
        logout()
      } catch (error) {
        setUser(null)
        logout()
      }
    }
    handleLogout()
  }, [logoutMutation, setUser])

  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <p className='text-l text-blue-800 mb-2'>Logging you out</p>
        <Loader className='' />
      </div>
    </Layout>
  )
}

export default withApollo(Logout)
