import Layout from 'layout/Layout'
import { NextPage } from 'next'
import * as React from 'react'
import Link from 'next/link'

const index: NextPage = () => (
  <Layout title='Home | Genesis'>
    <section className='h-full flex-col self-center justify-center items-center'>
      <div className='w-full text-center mx-auto'>
        <div className='text-gray-700 text-2xl font-normal leading-tight'>
          <i className='lni-thought text-4xl mr-2 leading-normal' />
          <span className='text-gray-700 pb-6'>
            Welcome to Genesis. Go to your
            <Link href='/dashboard'>
              <a
                href='/dashboard'
                className='text-blue-700 hover:text-blue-500 ml-2'
              >
                dashboard
              </a>
            </Link>
          </span>
        </div>
      </div>
    </section>
  </Layout>
)
export default index
