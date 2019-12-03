import Layout from 'layout/Layout'
import { NextPage } from 'next'
import * as React from 'react'
import { withAuthSync } from 'lib/withAuthSync'
import { useMeQuery } from 'lib/api-graphql'

const dashboard: NextPage = () => {
  const { data, loading, error } = useMeQuery()
  if (loading) {
    return (
      <Layout>
        <div>loading...</div>
      </Layout>
    )
  }

  if (error) {
    console.log(error)
    return (
      <Layout>
        <div>err</div>
      </Layout>
    )
  }
  return (
    <Layout title="Home | Genesis">
      <div>{JSON.stringify(data, null, 2)}</div>
    </Layout>
  )
}

export default withAuthSync(dashboard)
