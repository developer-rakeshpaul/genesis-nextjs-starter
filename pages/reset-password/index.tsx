import React from 'react'

import useRegisterForm from 'hooks/useRegisterForm'
import Layout from 'layout/Layout'
import { useSignupMutation } from 'lib/api-graphql'

const Register = () => {
  const { formik } = useRegisterForm({
    onSubmit: async (data: any): Promise<void> => {
      try {
        await signupMutation({ variables: { data } })
      } catch (error) {
        console.error('register', error)
      }
    }
  })
  const [
    signupMutation,
    { data: response, loading, error }
  ] = useSignupMutation()

  console.log(JSON.stringify({ response, error }, null, 2))
  return (
    <Layout title="Register | Genesis">
      <section className="h-full flex-col self-center justify-center items-center">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="text-lg font-bold my-3 text-center text-gray-600">
            Reset Password
          </h1>
          <div className="bg-white md:shadow-md md:rounded px-8 pt-6 pb-8 mb-4">
            <form onSubmit={formik.handleSubmit}>
              <p className="mb-2 text-center text-red-500 text-xs italic">
                {/* {error} */}
              </p>
              <div className="mb-2">
                <input
                  name="password"
                  className="appearance-none border border-blue-400 hover:border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-blue-300 focus:placeholder-gray-500"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  placeholder="Min. 6 characters"
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="mt-1 text-red-500 text-xs italic">
                    {formik.errors.password}
                  </div>
                )}
              </div>
              <div className="mb-2">
                <input
                  name="password"
                  className="appearance-none border border-blue-400 hover:border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-blue-300 focus:placeholder-gray-500"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  placeholder="Confirm Password"
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="mt-1 text-red-500 text-xs italic">
                    {formik.errors.password}
                  </div>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                  type="submit"
                  disabled={formik.isSubmitting || loading}
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Register
