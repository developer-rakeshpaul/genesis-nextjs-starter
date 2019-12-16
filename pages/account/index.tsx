import React from 'react'

import { withApollo } from 'lib/withApollo'
import { NextPage } from 'next'
import { LoadingButton } from 'components/button'
import { withAuthSync } from 'lib/withAuthSync'
import Layout from 'layout/Layout'
import { useFormik } from 'formik'

const Profile: NextPage = ({ user }: any) => {
  const formik = useFormik({
    initialValues: user,
    onSubmit: async (data: any): Promise<void> => {
      console.log(data)
    }
  })
  return (
    <Layout title='Account | Genesis'>
      <section className='h-full flex-col self-center justify-center items-center'>
        <div className='w-full max-w-sm mx-auto'>
          <h1 className='text-lg font-bold my-3 text-center text-gray-600'>
            Profile
          </h1>
          <div className='bg-white md:shadow-md md:rounded px-8 pt-6 pb-8 mb-4'>
            <form onSubmit={formik.handleSubmit}>
              <p className='mb-2 text-center text-red-500 text-xs italic'>
                {/* {error} */}
              </p>
              <div className='my-6'>
                <div className='text-center relative'>
                  <input
                    type='file'
                    name='pic'
                    accept='image/*'
                    className='appearance-none rounded-full w-32 h-32 m-auto bg-red-800 absolute top-0 left-0 right-0 cursor-pointer z-0 outline-none opacity-0'
                  />
                  <img
                    className='w-32 h-32 rounded-full shadow-xl m-auto border border-gray-200 z-10'
                    src={`https://ui-avatars.com/api/?rounded=true&name=${user.name}`}
                    alt='profile pic'
                  />
                </div>
              </div>
              <div className='my-6'>
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
              <div className='mt-6 mb-4'>
                <textarea
                  className='appearance-none border border-blue-400 hover:border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-blue-300 focus:placeholder-gray-500'
                  name='summary'
                  placeholder='Describe yourself here...'
                />
                {/* {formik.touched.email && formik.errors.email && (
                  <div className='mt-1 text-red-500 text-xs italic'>
                    {formik.errors.email}
                  </div>
                )} */}
              </div>
              <div className='mt-4 mb-6'>
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
                  // loading={loading}
                  disabled={formik.isSubmitting}
                >
                  Update
                </LoadingButton>
              </div>
            </form>
          </div>
          {/* <div className='bg-white md:shadow-md md:rounded px-8 pt-6 pb-8 mb-4'>
            <form onSubmit={formik.handleSubmit}>
              <p className='mb-2 text-center text-red-500 text-xs italic'>
                {error}
              </p>
              <div className='my-6'>
                <input
                  className='appearance-none border border-blue-400 hover:border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-blue-300 focus:placeholder-gray-500'
                  type='password'
                  name='password'
                  placeholder='New Password'
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
                <input
                  className='appearance-none border border-blue-400 hover:border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-blue-300 focus:placeholder-gray-500'
                  type='password'
                  name='password'
                  placeholder='Confirm Password'
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className='mt-1 text-red-500 text-xs italic'>
                    {formik.errors.password}
                  </div>
                )}
              </div>
              <div className='mt-4 flex items-center justify-between'>
                <LoadingButton
                  className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
                  type='submit'
                  loading={loading}
                  disabled={formik.isSubmitting }
                >
                  Change Password
                </LoadingButton>
              </div>
            </form>
          </div> */}
        </div>
      </section>
    </Layout>
  )
}

export default withApollo(withAuthSync(Profile))