import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import {
  FormError,
  FormLabel,
  FormWrapper,
  Input,
  Title,
} from 'components/form'
import Layout from 'layout/Layout'
import { useFormInputState } from 'hooks/useFormInput'
import useRegisterForm from 'hooks/useRegisterForm'
import { LoadingButton } from 'components/button'
import { withApollo } from 'lib/withApollo'
import get from 'lodash.get'

const Register: NextPage = () => {
  const { formik, data, loading, error, handleChange } = useRegisterForm()

  const nameInputState = useFormInputState(formik, 'name', 2)
  const emailInputState = useFormInputState(formik, 'email')
  const passwordInputState = useFormInputState(formik, 'password', 6)
  const { id, email, status }: any = get(data, 'signup', {})
  return (
    <Layout title='Create an Account | Genesis'>
      <FormWrapper>
        {/* <h1 className='text-lg font-bold my-3 text-center text-gray-600'>
            Create an account
          </h1> */}
        <div className='bg-white md:shadow-md md:rounded px-8 py-8 md:py-12'>
          {data && id && status === 'verification' && (
            <div className='flex flex-col items-center'>
              <h1 className='mt-1 font-bold text-xl text-gray-800 leading-tight'>
                You've got mail!
              </h1>
              <i className='lni-envelope text-5xl leading-tight rounded-full text-blue-500' />
              <p className='text-center text-gray-600 leading-tight'>
                We send confirmation instructions to:
              </p>
              <p className='font-bold text-sm text-gray-800 leading-tight mt-1'>
                {email}
              </p>
            </div>
          )}

          {(!data || error) && (
            <>
              <Title>Create an account</Title>
              <form onSubmit={formik.handleSubmit}>
                {error && <FormError error={error} />}
                <div className='mb-4'>
                  <FormLabel htmlFor='name'>Name</FormLabel>
                  <Input
                    state={nameInputState}
                    type='text'
                    name='name'
                    placeholder='ex. John Doe'
                    onChange={handleChange}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className='mt-1 text-red-500 text-xs italic'>
                      {formik.errors.name}
                    </div>
                  )}
                </div>
                <div className='mb-4'>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input
                    state={emailInputState}
                    type='email'
                    name='email'
                    placeholder='ex. johndoe@somemail.com'
                    onChange={handleChange}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className='mt-1 text-red-500 text-xs italic'>
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div className='mb-4'>
                  <FormLabel htmlFor='password'>Password</FormLabel>
                  <Input
                    state={passwordInputState}
                    type='password'
                    name='password'
                    placeholder='Min. 6 characters'
                    onChange={handleChange}
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
                      <span className='cursor-pointer ml-1 text-blue-700 hover:text-blue-500'>
                        privacy policy
                      </span>
                    </Link>
                  </p>
                </div>
                <div className='mt-4 flex items-center justify-between'>
                  <LoadingButton
                    className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
                    type='submit'
                    loading={formik.isSubmitting || loading}
                    disabled={formik.isSubmitting || loading}>
                    Create your account
                  </LoadingButton>
                </div>
              </form>
            </>
          )}
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
