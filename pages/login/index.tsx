import { LoadingButton } from 'components/button'
import { FormError, FormLabel, FormWrapper } from 'components/form'
import useLoginForm from 'hooks/useLoginForm'
import Layout from 'layout/Layout'
import { withApollo } from 'lib/withApollo'
import { withAuthUser } from 'lib/withAuthUser'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import get from 'lodash.get'

const Login: NextPage = () => {
  const { formik, loading, error, handleChange } = useLoginForm()
  return (
    <Layout title='Login | Genesis'>
      <FormWrapper>
        {/* <h1 className='text-2xl font-bold my-3 text-center text-gray-600'>
              Login
            </h1> */}
        <div className='bg-white md:shadow-md md:rounded px-8 py-8'>
          <p className='text-2xl font-bold text-gray-800  mb-4 md:mb-8'>
            Login
          </p>
          <form onSubmit={formik.handleSubmit}>
            {error && <FormError error={error} />}
            <div className='mt-2 mb-6'>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <input
                name='email'
                className='appearance-none border border-blue-400 hover:border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-blue-300 focus:placeholder-gray-500'
                type='email'
                onChange={handleChange}
                value={formik.values.email}
                placeholder='ex. johndoe@somemail.com'
              />
              {formik.errors.email && (
                <div className='mt-1 text-red-500 text-xs italic'>
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div className='mb-1'>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <input
                name='password'
                className='appearance-none border border-blue-400 hover:border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-blue-300 focus:placeholder-gray-500'
                type='password'
                onChange={handleChange}
                value={formik.values.password}
                placeholder={"don't you remember me"}
              />
              {formik.touched.password &&
                get(formik, 'values.password.length', 0) === 0 && (
                  <div className='mt-1 text-red-500 text-xs italic'>
                    {formik.errors.password}
                  </div>
                )}
            </div>
            <div>
              <p className='block text-right'>
                <Link href='/forgot-password'>
                  <a className='text-xs text-blue-700 hover:text-blue-500'>
                    Forgot Password?
                  </a>
                </Link>
              </p>
            </div>
            <div className='flex items-center justify-between mt-4'>
              <LoadingButton
                className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
                type='submit'
                loading={loading}
                disabled={formik.isSubmitting}>
                Sign In
              </LoadingButton>
            </div>
          </form>
          <div className='mt-8'>
            <hr className='w-full border-t border-blue-400' />
            <div className='flex items-center justify-center text-center text-gray-500 text-sm -m-3'>
              <span className='bg-white px-2'>
                Sign in using your social login
              </span>
            </div>
          </div>
          <div className='flex items-center justify-center mt-6'>
            <button className='appearance-none bg-white hover:bg-blue-500 text-blue-500 hover:text-white text-lg font-normal leading-relaxed pb-1 pt-2 px-5 rounded border border-blue-500 mr-5'>
              <i className='lni-twitter-filled text-lg mr-2 leading-tight' />
              Twitter
            </button>
            <button className='appearance-none bg-white hover:bg-blue-500 text-blue-500 hover:text-white text-lg font-normal leading-relaxed pb-1 pt-2 px-5 rounded border border-blue-500 '>
              <i className='lni-github-original text-lg mr-2 leading-tight' />
              GitHub
            </button>
          </div>
        </div>
        <p className='mt-4 text-center text-gray-500 text-xs'>
          Not a member yet?
          <Link href='/register'>
            <a className='ml-2 text-blue-700 hover:text-blue-500'>
              Create account
            </a>
          </Link>
        </p>
      </FormWrapper>
    </Layout>
  )
}

export default withApollo(withAuthUser(Login))
