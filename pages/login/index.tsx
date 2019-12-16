import React from 'react'
import get from 'lodash.get'
import { NextPage } from 'next'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { LoadingButton } from 'components/button'
import useLoginForm from 'hooks/useLoginForm'
import Layout from 'layout/Layout'
import { setAccessToken } from 'lib/accessToken'
import { LoginMutationVariables, useLoginMutation } from 'lib/api-graphql'
import { withAuthUser } from 'lib/withAuthUser'
import { useAuthUser } from 'store'
import { withApollo } from 'lib/withApollo'

const Login: NextPage = () => {
  const router = useRouter()
  const [loginMutation, { error, loading }] = useLoginMutation()
  const setUser = useAuthUser(store => store.setUser)

  const onSubmit = async (variables: LoginMutationVariables) => {
    try {
      const response = await loginMutation({
        variables,
      })

      const { token, user } = get(response, 'data.login', {})
      if (token) {
        setAccessToken(token)
        setUser(user)
      }
      const redirect = get(router, 'query.redirect')
      if (redirect) {
        Router.replace(redirect)
      } else {
        Router.replace('/dashboard')
      }
    } catch (e) {
      console.error(e)
    }
  }

  const { formik } = useLoginForm({ onSubmit })
  return (
    <Layout title='Login | Genesis'>
      {
        <section className='h-full flex-col self-center justify-center items-center'>
          <div className='w-full max-w-sm mx-auto'>
            <h1 className='text-lg font-bold my-3 text-center text-gray-600'>
              Login
            </h1>
            <div className='bg-white md:shadow-lg md:rounded px-8 pt-6 pb-8 mb-4'>
              <form onSubmit={formik.handleSubmit}>
                <p className='mb-2 text-center text-red-500 text-xs italic'>
                  {JSON.stringify(error)}
                </p>
                <div className='my-6'>
                  <label
                    className='block text-gray-700 text-sm mb-2'
                    htmlFor='email'>
                    Email
                  </label>
                  <input
                    name='email'
                    className='appearance-none border border-blue-400 hover:border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-blue-300 focus:placeholder-gray-500'
                    type='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder='ex. johndoe@somemail.com'
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className='mt-1 text-red-500 text-xs italic'>
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div className='mb-2'>
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
                <div>
                  <p className='block text-right'>
                    <Link href='/forgot-password'>
                      <a className='text-sm text-blue-700 hover:text-blue-500'>
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
              <div className='mt-6'>
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
                <a
                  href='/register'
                  className='ml-2 text-blue-700 hover:text-blue-500'>
                  Create account
                </a>
              </Link>
            </p>
          </div>
        </section>
      }
    </Layout>
  )
}

export default withApollo(withAuthUser(Login))
