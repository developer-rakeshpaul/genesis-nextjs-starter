import React from 'react'
import { NextPage } from 'next'
import Layout from 'layout/Layout'
import { withAuthUser } from 'lib/withAuthUser'

const Index: NextPage = () => {
  return (
    <Layout title='Home | Genesis'>
      <div className='w-full text-center mx-auto'>
        <div className='text-gray-700 text-2xl font-normal leading-tight'>
          <i className='lni-thought text-4xl mr-2 leading-normal' />
          <span className='text-gray-700 pb-6'>Welcome to Genesis</span>
        </div>
      </div>
    </Layout>
  )
}

export default withAuthUser(Index)
