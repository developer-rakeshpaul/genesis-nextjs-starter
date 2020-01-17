import React from 'react'
import { useFormik } from 'formik'
import { LoadingButton } from 'components/button'
import { User } from 'lib/api-graphql'
import {
  DisabledInput,
  FormLabel,
  FormHint,
  TextArea,
  Input,
} from 'components/form'

interface ProfileProps {
  user: User
}

export const Profile: React.FC<ProfileProps> = ({ user }) => {
  const formik = useFormik({
    initialValues: user,
    onSubmit: async (data: any): Promise<void> => {
      console.log(data)
    },
  })
  return (
    <>
      <h1 className='text-2xl my-2 text-left text-gray-800'>Public Profile</h1>
      <hr />
      <div className='md:px-8 py-6 mb-4 max-w-lg'>
        <form onSubmit={formik.handleSubmit}>
          <p className='mb-2 text-center text-red-500 text-xs italic'>
            {/* {error} */}
          </p>
          <div className='mb-4'>
            <div className='text-center relative'>
              <input
                type='file'
                id='pic'
                name='pic'
                accept='image/*'
                className='appearance-none rounded w-32 h-32 m-auto bg-red-800 absolute top-0 left-0 right-0 cursor-pointer z-0 outline-none opacity-0'
              />
              <img
                className='w-32 h-32 rounded border border-gray-200 z-10'
                src={`https://ui-avatars.com/api/?name=${user.name}`}
                alt='profile pic'
              />
            </div>
          </div>
          <div className='mb-4'>
            <FormLabel htmlFor='name'>Name</FormLabel>
            <Input
              type='text'
              name='name'
              id='name'
              placeholder='ex. John Doe'
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <FormHint>
              Your name may appear around Genesis where you contribute or are
              mentioned. You can remove it at any time.
            </FormHint>
            {formik.touched.name && formik.errors.name && (
              <div className='mt-1 text-red-500 text-xs italic'>
                {formik.errors.name}
              </div>
            )}
          </div>
          <div className='mb-4'>
            <FormLabel htmlFor='bio'>Bio</FormLabel>
            <TextArea
              name='bio'
              id='bio'
              placeholder='Tell us a little bit about yourself'
            />
            {/* {formik.touched.email && formik.errors.email && (
                  <div className='mt-1 text-red-500 text-xs italic'>
                    {formik.errors.email}
                  </div>
                )} */}
          </div>
          <div className='mb-6'>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <DisabledInput
              type='email'
              name='email'
              id='email'
              disabled
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
              disabled={formik.isSubmitting}>
              Update
            </LoadingButton>
          </div>
        </form>
      </div>
    </>
  )
}
