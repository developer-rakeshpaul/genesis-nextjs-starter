import React from 'react'
import Link from 'next/link'

// import redirect from '../lib/redirect'
// import checkLoggedIn from '../lib/checkLoggedIn'

import RegisterForm from 'components/RegisterForm'
import Layout from 'layout/Layout'

const Register = () => {
  return (
    <Layout title="Register | Genesis">
      <section className="h-full flex-col self-center justify-center items-center">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="text-lg font-bold my-3 text-center text-gray-600">
            Create an account
          </h1>
          <RegisterForm>
            <p className="mt-4 text-center text-gray-500 text-xs">
              Already have an account?
              <Link href="/login">
                <a className="ml-2 text-blue-600">Sign In</a>
              </Link>
            </p>
          </RegisterForm>
        </div>
      </section>
    </Layout>
  )
}

export default Register
