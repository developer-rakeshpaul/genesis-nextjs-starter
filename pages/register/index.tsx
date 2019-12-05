import React from 'react'
import Link from 'next/link'

// import redirect from '../lib/redirect'
// import checkLoggedIn from '../lib/checkLoggedIn'

import useRegisterForm from 'hooks/useRegisterForm'
import Layout from 'layout/Layout'

const Register = () => {
  const { formik } = useRegisterForm({})
  return (
    <Layout title="Register | Genesis">
      <section className="h-full flex-col self-center justify-center items-center">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="text-lg font-bold my-3 text-center text-gray-600">
            Create an account
          </h1>
          <form
            className="bg-white md:shadow-md md:rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={formik.handleSubmit}
          >
            <p className="mb-2 text-center text-red-500 text-xs italic">
              {/* {error} */}
            </p>
            <div className="my-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                type="text"
                name="name"
                placeholder="ex. John Doe"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="mt-1 text-red-500 text-xs italic">
                  {formik.errors.name}
                </div>
              )}
            </div>
            <div className="my-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                type="email"
                name="email"
                placeholder="ex. johndoe@somemail.com"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="mt-1 text-red-500 text-xs italic">
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div className="mb-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                type="password"
                name="password"
                placeholder="Min. 6 characters"
              />
              {formik.touched.password && formik.errors.password && (
                <div className="mt-1 text-red-500 text-xs italic">
                  {formik.errors.password}
                </div>
              )}
            </div>
            <div className="my-6">
              <p className="text-xs">
                By clicking "Create your account" below, you agree to our
                <Link href="/termsofservice">
                  <span className="text-blue-600"> terms of service </span>
                </Link>
                <span>and</span>
                <Link href="/privacypolicy">
                  <span className="text-blue-600"> privacy policy</span>
                </Link>
              </p>
            </div>{' '}
            <div className="mt-4 flex items-center justify-between">
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                type="submit"
                disabled={formik.isSubmitting}
              >
                Create Your Account
              </button>
            </div>
            <p className="mt-4 text-center text-gray-500 text-xs">
              Already have an account?
              <Link href="/login">
                <a className="ml-2 text-blue-600">Sign In</a>
              </Link>
            </p>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Register
