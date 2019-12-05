import Layout from 'layout/Layout'
import { NextPage } from 'next'
import * as React from 'react'
// import { useMeQuery } from 'lib/api-graphql'
import { withAuthSync } from 'lib/withAuthSync'
import { withAuthUser } from 'lib/withAuthUser'

const dashboard: NextPage = (props: any) => {
  console.log(props.user)
  return (
    <Layout title="Dashboard | Genesis">
      <div>{JSON.stringify(props.user, null, 2)}</div>
    </Layout>
  )
}

export default withAuthUser(withAuthSync(dashboard))
