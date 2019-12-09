import Layout from 'layout/Layout'
import { NextPage } from 'next'
import * as React from 'react'

const index: NextPage = () => (
  <Layout title="Home | Genesis">
    <section className="h-full flex-col self-center justify-center items-center">
      <div className="w-full text-center mx-auto">
        <div className="text-gray-700 text-2xl font-normal leading-tight">
          <i className="lni-thumbs-up text-4xl mr-2 leading-loose" />
          <span className="pb-6">
            Your account has been sucessfully verified.
          </span>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </section>
  </Layout>
)
export default index
