import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { LoadingButton } from 'components/button'
import useRegisterForm from 'hooks/useRegisterForm'
import { useSignupMutation } from 'lib/api-graphql'
import { withApollo } from 'lib/withApollo'
import Layout from 'layout/Layout'
import { withAuthUser } from 'lib/withAuthUser'

const ForgotPassword: NextPage = () => {
  const [
    signupMutation,
    { data: response, loading, error }
  ] = useSignupMutation()
  const { formik } = useRegisterForm({
    onSubmit: async (data: any): Promise<void> => {
      try {
        await signupMutation({ variables: { data } })
      } catch (error) {
        console.error('register', error)
      }
    }
  })

  console.log(JSON.stringify({ response, error }, null, 2))
  return (
    <Layout title='Forgot Password | Genesis'>
      <section className='h-full flex-col self-center justify-center items-center'>
        <div className='w-full max-w-sm mx-auto'>
          <h1 className='text-lg font-bold my-3 text-center text-gray-600'>
            Forgot Password
          </h1>
          <div className='bg-white md:shadow-md md:rounded px-8 pt-6 pb-8 mb-4'>
            <form onSubmit={formik.handleSubmit}>
              <p className='mb-2 text-center text-red-500 text-xs italic'>
                {/* {error} */}
              </p>
              <div className='my-6'>
                <input
                  className='appearance-none border border-blue-400 hover:border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-blue-300 focus:placeholder-gray-500'
                  type='email'
                  name='email'
                  placeholder='ex. johndoe@somemail.com'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className='mt-1 text-red-500 text-xs italic'>
                    {formik.errors.email}
                  </div>
                )}
              </div>
              <div className='mt-4 flex items-center justify-between'>
                <LoadingButton
                  className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
                  type='submit'
                  loading={loading}
                  disabled={formik.isSubmitting || loading}
                >
                  Reset Password
                </LoadingButton>
              </div>
            </form>
          </div>
          <p className='mt-4 text-center text-gray-500 text-xs'>
            Remember your password?
            <Link href='/login'>
              <a className='ml-2 text-blue-700 hover:text-blue-500'>Sign In</a>
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default withApollo(withAuthUser(ForgotPassword))
