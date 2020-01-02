import React from 'react'
import get from 'lodash.get'
import { passwordRules, PASSWORD_MIN_LENGTH } from 'utils/schema'
import { LoadingButton } from 'components/button'
import { FormLabel, FormError } from 'components/form'
import { useFormInputStyles } from 'hooks/useFormInputStyles'
import useChangePasswordForm from 'hooks/useChangePasswordForm'
// import { LoadingButton } from 'components/button'

export const ChangePassword: React.FC<{}> = () => {
  const { formik, data, loading, error, handleChange } = useChangePasswordForm()
  // const passwordChanged = get(data, 'changePassword', false)

  const rulesElements = passwordRules.map((rule: string, index: number) => {
    const password = get(formik, 'values.password')
    const [uc, numeric, min] = passwordRules

    let className = 'text-sm text-gray-700'
    if (password) {
      if (
        (rule === uc && /[A-Z]/.test(password)) ||
        (rule === numeric && /[0-9]/.test(password)) ||
        (rule === min && password.length >= PASSWORD_MIN_LENGTH)
      ) {
        className = 'text-sm line-through text-green-500'
      }
    }

    return (
      <li className={className} key={index}>
        {rule}
      </li>
    )
  })

  const currentPasswordStyle = useFormInputStyles(
    formik,
    'currentPassword',
    PASSWORD_MIN_LENGTH,
  )

  const passwordStyle = useFormInputStyles(
    formik,
    'password',
    PASSWORD_MIN_LENGTH,
  )
  const confirmPasswordStyle = useFormInputStyles(
    formik,
    'confirmPassword',
    PASSWORD_MIN_LENGTH,
  )

  return (
    <>
      <h1 className='text-2xl my-2 text-left text-gray-800'>Change Password</h1>
      <hr />
      <div className='md:px-8 pt-6 pb-8 mb-4 max-w-lg'>
        {(!data || error) && (
          <div className='flex flex-col'>
            <div className='flex flex-col w-full'>
              <p className='font-bold text-gray-800 mb-2'>
                Passwords must contain:
              </p>
              <ul className='list-disc list-inside mb-4'>
                {passwordRules && rulesElements}
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
                  <input
                    name='currentPassword'
                    className={currentPasswordStyle}
                    type='password'
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
                  <input
                    name='password'
                    className={passwordStyle}
                    type='password'
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
                  <input
                    name='confirmPassword'
                    className={confirmPasswordStyle}
                    type='password'
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
