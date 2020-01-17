import get from 'lodash.get'
import { NextPage } from 'next'
import Error from 'next/error'
import Link from 'next/link'
import React from 'react'
import { LoadingButton } from 'components/button'
import { Input, FormError, FormLabel, Title } from 'components/form'
import { useFormInputState } from 'hooks/useFormInput'
import useResetPasswordForm from 'hooks/useResetPasswordForm'
import Layout from 'layout/Layout'
import { withApollo } from 'lib/withApollo'
import { withAuthUser } from 'lib/withAuthUser'
import { buildRules, PASSWORD_MIN_LENGTH } from 'utils/schema'

const ResetPassword: NextPage = () => {
  const {
    formik,
    data,
    loading,
    error,
    handleChange,
    token,
  } = useResetPasswordForm()
  const passwordReset = get(data, 'resetPassword', false)

  const passwordState = useFormInputState(
    formik,
    'password',
    PASSWORD_MIN_LENGTH,
  )
  const confirmPasswordState = useFormInputState(
    formik,
    'confirmPassword',
    PASSWORD_MIN_LENGTH,
  )

  if (!token) {
    return <Error statusCode={404} />
  }
  return (
    <Layout title='Reset your password | Genesis'>
      <div className='w-full max-w-2xl mx-auto '>
        {/* <h1 className='text-lg font-bold my-3 text-center text-gray-600'>
            Reset Password
          </h1> */}
        <div className='bg-white md:shadow-md md:rounded px-8 py-8 md:py-16'>
          {passwordReset && (
            <div className='flex flex-col items-center'>
              <i className='lni-check-mark-circle text-5xl leading-tight rounded-full text-green-500' />
              <h1 className='mt-1 font-bold text-xl text-gray-800 leading-tight'>
                Password updated!
              </h1>
              <p className='text-gray-600 leading-tight'>
                Your password has been changed successfully!.
              </p>
              <p className='text-gray-600 leading-tight'>
                Use your new password to{' '}
                <Link href='/login'>
                  <a href='/login' className='text-blue-500'>
                    login
                  </a>
                </Link>
                .
              </p>
            </div>
          )}
          {(!data || error) && (
            <>
              <Title>Change your password</Title>
              <div className='flex flex-col md:flex-row-reverse'>
                <div className='flex flex-col md:w-1/2 md:ml-12'>
                  <p className='font-bold text-gray-800'>
                    Passwords must contain:
                  </p>
                  <ul className='list-disc list-inside mb-4 md:mb-0'>
                    {buildRules(get(formik, 'values.password'))}
                  </ul>
                </div>
                <div className='md:w-1/2'>
                  {error && (
                    <div className='mb-2'>
                      <FormError error={error} />
                    </div>
                  )}
                  <form onSubmit={formik.handleSubmit}>
                    <div className='mb-4'>
                      <FormLabel htmlFor='password'>New Password</FormLabel>
                      <Input
                        name='password'
                        id='password'
                        type='password'
                        state={passwordState}
                        onChange={handleChange}
                        value={formik.values.password}
                        placeholder='Min. 6 characters'
                      />
                      {formik.touched.password && formik.errors.password && (
                        <div className='mt-1 text-red-500 text-xs italic'>
                          {formik.errors.password}
                        </div>
                      )}
                    </div>
                    <div className='mb-4'>
                      <FormLabel htmlFor='confirmPassword'>
                        Confirm New Password
                      </FormLabel>
                      <Input
                        name='confirmPassword'
                        id='confirmPassword'
                        type='password'
                        state={confirmPasswordState}
                        onChange={handleChange}
                        value={formik.values.confirmPassword}
                        placeholder='Confirm Password'
                      />
                      {formik.touched.confirmPassword &&
                        formik.errors.confirmPassword && (
                          <div className='mt-1 text-red-500 text-xs italic'>
                            {formik.errors.confirmPassword}
                          </div>
                        )}
                    </div>
                    <div className='mt-6 flex items-center justify-between'>
                      <LoadingButton
                        className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
                        type='submit'
                        loading={formik.isSubmitting || loading}
                        disabled={formik.isSubmitting || loading}>
                        Change my password
                      </LoadingButton>
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
        <p className='mt-4 text-center text-gray-500 text-xs'>
          Remember your password?
          <Link href='/login'>
            <a className='ml-2 text-blue-700 hover:text-blue-500'>Sign In</a>
          </Link>
        </p>
      </div>
    </Layout>
  )
}

export default withApollo(withAuthUser(ResetPassword))
