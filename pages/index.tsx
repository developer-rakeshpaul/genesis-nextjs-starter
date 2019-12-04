import Layout from 'layout/Layout'
import { NextPage } from 'next'
import * as React from 'react'
import Link from 'next/link'

const index: NextPage = () => (
  <Layout title="Home | Genesis">
    <Link href="/dashboard">
      <a href="/dashboard">Dashboard</a>
    </Link>
  </Layout>
)
export default index
