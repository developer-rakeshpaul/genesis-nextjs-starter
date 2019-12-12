import { NextPage } from 'next'
import * as Yup from 'yup'
import Link from 'next/link'
import React from 'react'
import { LoadingButton } from 'components/button'
import { withApollo } from 'lib/withApollo'
import Layout from 'layout/Layout'
import { withAuthUser } from 'lib/withAuthUser'
import { useFormik } from 'formik'
import { useForgotPasswordMutation } from 'lib/api-graphql'
import get from 'lodash.get'

export const forgotPassordSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
})

const ForgotPassword: NextPage = () => {
  const [forgotPassword, { data, loading, error }] = useForgotPasswordMutation()
  const resetLinkSend = get(data, 'forgotPassword', false)
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPassordSchema,
    onSubmit: async (values: any): Promise<void> => {
      try {
        await forgotPassword({ variables: values })
      } catch (error) {
        console.error('register', error)
      }
    },
  })

  console.log(data, error)
  return (
    <Layout title='Forgot Password | Genesis'>
      <section className='h-full flex-col self-center justify-center items-center'>
        <div className='w-full max-w-sm mx-auto'>
          <h1 className='text-lg font-bold my-3 text-center text-gray-600'>
            Forgot Password
          </h1>
          <div className='bg-white md:shadow-md md:rounded px-8 pt-6 pb-8 mb-4'>
            {resetLinkSend && (
              <p className='text-green-600'>
                Please check your email and follow the instructions in the email
                to reset your password.
              </p>
            )}
            {!data && !resetLinkSend && !error && (
              <p className='text-blue-600'>
                We get it, stuff happens. Just enter your email address below
                and we'll send you a link to reset your password!
              </p>
            )}

            {data && (error || !resetLinkSend) && (
              <p className='text-red-600'>
                Error sending reset password instructions. Please check the
                email and retry!
              </p>
            )}
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
                  disabled={formik.isSubmitting || loading}>
                  Email me a recovery link
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
