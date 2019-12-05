import Layout from 'layout/Layout'
import { NextPage } from 'next'
import * as React from 'react'
// import { useMeQuery } from 'lib/api-graphql'
import { withAuthSync } from 'lib/withAuthSync'
import { withAuthUser } from 'lib/withAuthUser'
import { isServer } from 'utils'
import Router from 'next/router'

const dashboard: NextPage = ({ user }: any) => {
  React.useEffect(() => {
    if (!user && !isServer) {
      Router.push('/login')
    }
  }, [])
  return (
    <Layout title="Dashboard | Genesis">
      {user && <div>{JSON.stringify(user, null, 2)}</div>}
    </Layout>
  )
}

export default withAuthUser(withAuthSync(dashboard))
