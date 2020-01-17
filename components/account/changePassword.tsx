import React from 'react'
import { PASSWORD_MIN_LENGTH, buildRules } from 'utils/schema'
import { LoadingButton } from 'components/button'
import { Input, FormLabel, FormError } from 'components/form'
import { useFormInputState } from 'hooks/useFormInput'
import useChangePasswordForm from 'hooks/useChangePasswordForm'
import get from 'lodash.get'
// import { LoadingButton } from 'components/button'

export const ChangePassword: React.FC<{}> = () => {
  const { formik, data, loading, error, handleChange } = useChangePasswordForm()
  // const passwordChanged = get(data, 'changePassword', false)

  const currentPasswordState = useFormInputState(
    formik,
    'currentPassword',
    PASSWORD_MIN_LENGTH,
  )

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

  const passwordChanged = data?.changePassword
  return (
    <>
      <h1 className='text-2xl my-2 text-left text-gray-800'>Change Password</h1>
      <hr />
      <div className='md:px-8 pt-6 pb-8 mb-4 max-w-lg'>
        {passwordChanged && (
          <div className='flex flex-col items-center'>
            <i className='lni-check-mark-circle text-5xl leading-tight rounded-full text-green-500' />
            <h1 className='mt-1 font-bold text-xl text-gray-800 leading-tight'>
              Password updated!
            </h1>
            <p className='text-gray-600 leading-tight'>
              Your password has been changed successfully!.
            </p>
          </div>
        )}
        {(!data || error) && (
          <div className='flex flex-col'>
            <div className='flex flex-col w-full'>
              <p className='font-bold text-gray-800 mb-2'>
                Passwords must contain:
              </p>
              <ul className='list-disc list-inside mb-4'>
                {buildRules(get(formik, 'values.password'))}
              </ul>
            </div>
            <div className='w-full'>
              {error && (
                <div className='mb-2'>
                  <FormError error={error} />
                </div>
              )}
              <form onSubmit={formik.handleSubmit}>
                <div className='mb-4'>
                  <FormLabel htmlFor='currentPassword'>
                    Current Password
                  </FormLabel>
                  <Input
                    name='currentPassword'
                    type='password'
                    state={currentPasswordState}
                    onChange={handleChange}
                    value={formik.values.currentPassword}
                    placeholder={"don't you remember me"}
                  />
                  {formik.touched.currentPassword &&
                    formik.errors.currentPassword && (
                      <div className='mt-1 text-red-500 text-xs italic'>
                        {formik.errors.currentPassword}
                      </div>
                    )}
                </div>
                <div className='mb-4'>
                  <FormLabel htmlFor='password'>New Password</FormLabel>
                  <Input
                    name='password'
                    type='password'
                    state={passwordState}
                    onChange={handleChange}
                    value={formik.values.password}
                    placeholder={"don't forget me"}
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
                    Update password
                  </LoadingButton>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
