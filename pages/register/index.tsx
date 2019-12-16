import React from 'react'
import Link from 'next/link'

import useRegisterForm from 'hooks/useRegisterForm'
import { useSignupMutation } from 'lib/api-graphql'
import { withApollo } from 'lib/withApollo'
import Layout from 'layout/Layout'
import { authUser } from 'store'
import { isServer } from 'utils'
import Router from 'next/router'
import FormLabel from 'components/form/label'
import { FormWrapper } from 'components/form/wrapper'

const Register = () => {
  const destroy = authUser.subscribe(user => {
    if (user && !isServer) {
      Router.push('/dashboard')
    }
  })
  React.useEffect(() => {
    return destroy
  })

  const [
    signupMutation,
    { data: response, loading, error },
  ] = useSignupMutation()

  const { formik } = useRegisterForm({
    onSubmit: async (data: any): Promise<void> => {
      try {
        await signupMutation({ variables: { data } })
      } catch (error) {
        // console.error('register', error)
      }
    },
  })

  console.log('mutation: ', JSON.stringify({ response, error }, null, 2))
  return (
    <Layout title='Create an Account | Genesis'>
      <FormWrapper>
        {/* <h1 className='text-lg font-bold my-3 text-center text-gray-600'>
            Create an account
          </h1> */}
        <div className='bg-white md:shadow-md md:rounded px-8 py-8 md:py-12'>
          <p className='text-2xl font-bold text-gray-800 mb-4 md:mb-8'>
            Create an account
          </p>
          <form onSubmit={formik.handleSubmit}>
            <p className='mb-2 text-center text-red-500 text-xs italic'>
              {/* {error} */}
            </p>
            <div className='mb-6'>
              <FormLabel htmlFor='name'>Name</FormLabel>
              <input
                className='appearance-none border border-blue-400 hover:border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-blue-300 focus:placeholder-gray-500'
                type='text'
                name='name'
                placeholder='ex. John Doe'
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <div className='mt-1 text-red-500 text-xs italic'>
                  {formik.errors.name}
                </div>
              )}
            </div>
            <div className='my-6'>
              <FormLabel htmlFor='email'>Email</FormLabel>
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
            <div className='mb-2'>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <input
                className='appearance-none border border-blue-400 hover:border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-blue-300 focus:placeholder-gray-500'
                type='password'
                name='password'
                placeholder='Min. 6 characters'
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <div className='mt-1 text-red-500 text-xs italic'>
                  {formik.errors.password}
                </div>
              )}
            </div>
            <div className='my-6'>
              <p className='text-xs'>
                By clicking "Create your account" below, you agree to our
                <Link href='/termsofservice'>
                  <span className='cursor-pointer text-blue-700 hover:text-blue-500'>
                    terms of service
                  </span>
                </Link>
                {' and '}
                <Link href='/privacypolicy'>
                  <a
                    href='/privacypolicy'
                    className='cursor-pointer ml-1 text-blue-700 hover:text-blue-500'>
                    privacy policy
                  </a>
                </Link>
              </p>
            </div>
            <div className='mt-4 flex items-center justify-between'>
              <button
                className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
                type='submit'
                disabled={formik.isSubmitting || loading}>
                Create your account
              </button>
            </div>
          </form>
        </div>
        <p className='mt-4 text-center text-gray-500 text-xs'>
          Already have an account?
          <Link href='/login'>
            <a className='text-blue-700 hover:text-blue-500 ml-2'>Sign In</a>
          </Link>
        </p>
      </FormWrapper>
    </Layout>
  )
}

export default withApollo(Register)
