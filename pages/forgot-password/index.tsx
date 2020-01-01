import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import get from 'lodash.get'

import { LoadingButton } from 'components/button'
import { FormWrapper } from 'components/form/wrapper'
import useForgotPasswordForm from 'hooks/useForgotPasswordForm'
import useFormInputStyles from 'hooks/useFormInputStyles'
import Layout from 'layout/Layout'
import { withApollo } from 'lib/withApollo'
import { withAuthUser } from 'lib/withAuthUser'

const ForgotPassword: NextPage = () => {
  const { formik, data, loading, error, handleChange } = useForgotPasswordForm()
  const resetLinkSend = get(data, 'forgotPassword', false)
  const className = useFormInputStyles(formik, 'email')

  return (
    <Layout title='Forgot Password | Genesis'>
      <FormWrapper>
        {/* <h1 className='text-lg font-bold my-3 text-center text-gray-600'>
            Forgot Password
          </h1> */}
        <div className='bg-white md:shadow-md md:rounded px-8 py-16'>
          {resetLinkSend && (
            <div className='flex flex-col items-center'>
              <i className='lni-check-mark-circle text-5xl leading-tight rounded-full text-green-500' />
              <h1 className='mt-1 font-bold text-xl text-gray-800 leading-tight'>
                Reset link sent successfully!
              </h1>
              <p className='text-gray-600 leading-tight'>
                Please check your email and follow the instructions in the email
                to reset your password.
              </p>
            </div>
          )}
          {(!data || !get(data, 'forgotPassword', false) || error) && (
            <>
              <p className='text-2xl font-bold text-blue-500 mb-4 md:mb-8'>
                Forgot Password
              </p>
              {!data && !resetLinkSend && !error && (
                <p className='text-gray-600 text-sm leading-tight'>
                  We get it, stuff happens. Just enter your email address below
                  and we'll send you a link to reset your password!
                </p>
              )}

              {data && (error || !resetLinkSend) && (
                <p className='text-red-700 text-sm text-center leading-tight'>
                  Unable to send password reset instructions. Please check the
                  email and retry!
                </p>
              )}
              <form onSubmit={formik.handleSubmit}>
                <div className='mt-4 mb-6'>
                  <input
                    className={className}
                    type='email'
                    name='email'
                    placeholder='ex. johndoe@somemail.com'
                    onChange={handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email && (
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
            </>
          )}
        </div>
        <p className='mt-4 text-center text-gray-500 text-xs'>
          Remember your password?
          <Link href='/login'>
            <a className='ml-2 text-blue-700 hover:text-blue-500'>Sign In</a>
          </Link>
        </p>
      </FormWrapper>
    </Layout>
  )
}

export default withApollo(withAuthUser(ForgotPassword))
