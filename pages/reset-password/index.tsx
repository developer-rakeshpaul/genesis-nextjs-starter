import React from 'react'

import useRegisterForm from 'hooks/useRegisterForm'
import { useSignupMutation } from 'lib/api-graphql'
import { withApollo } from 'lib/withApollo'
import Layout from 'layout/Layout'
import { withAuthUser } from 'lib/withAuthUser'

const ResetPassword: React.FC = () => {
  const [
    signupMutation,
    { data: response, loading, error },
  ] = useSignupMutation()

  const { formik } = useRegisterForm({
    onSubmit: async (data: any): Promise<void> => {
      try {
        await signupMutation({ variables: { data } })
      } catch (error) {
        console.error('register', error)
      }
    },
  })
  console.log(JSON.stringify({ response, error }, null, 2))
  return (
    <Layout title='Reset your password | Genesis'>
      <section className='h-full flex-col self-center justify-center items-center'>
        <div className='w-full max-w-2xl mx-auto '>
          {/* <h1 className='text-lg font-bold my-3 text-center text-gray-600'>
            Reset Password
          </h1> */}
          <div className='bg-white md:shadow-md md:rounded px-8 py-8 md:py-24'>
            <p className='text-2xl font-bold text-gray-800 mb-4 md:mb-8'>
              Change your password
            </p>
            {error && (
              <p className='mb-4 text-center text-red-500 text-xs italic'></p>
            )}
            <div className='flex flex-col md:flex-row-reverse'>
              <div className='flex flex-col md:w-1/2 md:ml-12'>
                <p className='font-bold text-gray-800'>
                  Passwords must contain:
                </p>
                <ul className='list-disc list-inside mb-4 md:mb-0'>
                  <li className='text-gray-700 text-sm'>
                    At least 1 upper case letter(A-Z)
                  </li>
                  <li className='text-gray-700 text-sm'>
                    At least 1 number(0-9)
                  </li>
                  <li className='text-gray-700 text-sm'>
                    At least 8 characters
                  </li>
                </ul>
              </div>
              <form onSubmit={formik.handleSubmit} className='md:w-1/2'>
                <div className='mb-4'>
                  <label
                    className='block text-gray-700 text-sm mb-2'
                    htmlFor='password'>
                    New Password
                  </label>
                  <input
                    name='password'
                    className='appearance-none border border-blue-400 hover:border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-blue-300 focus:placeholder-gray-500'
                    type='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder='Min. 6 characters'
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className='mt-1 text-red-500 text-xs italic'>
                      {formik.errors.password}
                    </div>
                  )}
                </div>
                <div className='mb-6'>
                  <label
                    className='block text-gray-700 text-sm mb-2'
                    htmlFor='password'>
                    Confirm Password
                  </label>
                  <input
                    name='password'
                    className='appearance-none border border-blue-400 hover:border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-blue-300 focus:placeholder-gray-500'
                    type='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder='Confirm Password'
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className='mt-1 text-red-500 text-xs italic'>
                      {formik.errors.password}
                    </div>
                  )}
                </div>
                <div className='mt-4 flex items-center justify-between'>
                  <button
                    className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
                    type='submit'
                    disabled={formik.isSubmitting || loading}>
                    Change my Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default withApollo(withAuthUser(ResetPassword))
