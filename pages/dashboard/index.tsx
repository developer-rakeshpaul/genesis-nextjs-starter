import React from 'react'
import { NextPage } from 'next'
import Layout from 'layout/Layout'
import { withAuthSync } from 'lib/withAuthSync'

const Dashboard: NextPage = ({ user }: any) => {
  return (
    <Layout title='Dashboard | Genesis'>
      {user && <div>{JSON.stringify(user, null, 2)}</div>}
    </Layout>
  )
}

export default withAuthSync(Dashboard)
