import Layout from 'layout/Layout'
// import { useMeQuery } from 'lib/api-graphql'
import { withAuthSync } from 'lib/withAuthSync'
import { NextPage } from 'next'
import * as React from 'react'
import { withApollo } from 'lib/withApollo'

const Dashboard: NextPage = ({ user }: any) => {
  return (
    <Layout title='Dashboard | Genesis'>
      {user && <div>{JSON.stringify(user, null, 2)}</div>}
    </Layout>
  )
}

export default withApollo(withAuthSync(Dashboard))
