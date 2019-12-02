import * as React from 'react'
import { NextPage } from 'next'
import Layout from 'layout/Layout'
import { withApollo } from 'lib/withApollo'
import getInitialProps from 'lib/withAuth'

const dashboard: NextPage = () => (
  <Layout title="Home | Genesis">
    <div>hello from ui package</div>
  </Layout>
)

dashboard.getInitialProps = getInitialProps

export default withApollo(dashboard)
