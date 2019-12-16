import React from 'react'
import { object, string, ref } from 'yup'
import { useResetPasswordMutation } from 'lib/api-graphql'
import { withApollo } from 'lib/withApollo'
import Layout from 'layout/Layout'
import { withAuthUser } from 'lib/withAuthUser'
import { useFormik } from 'formik'
import get from 'lodash.get'
import useFormInputStyles from 'hooks/useFormInputStyles'
import { FormError } from 'components/form/error'
import { LoadingButton } from 'components/button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import Error from 'next/error'
import FormLabel from 'components/form/label'
import {
  passwordSchema,
  PASSWORD_MIN_LENGTH,
  passwordRules,
} from 'utils/schema'

const resetPasswordSchema = object().shape({
  password: passwordSchema,
  confirmPassword: string().when('password', {
    is: val => (val && val.length >= PASSWORD_MIN_LENGTH ? true : false),
    then: string().oneOf([ref('password')], 'Passwords do not match'),
  }),
})

const ResetPassword: NextPage = () => {
  const router = useRouter()
  const { token } = router.query
  const [error, setError] = React.useState()
  const [resetPassword, { data, loading }] = useResetPasswordMutation({
    fetchPolicy: 'no-cache',
  })
  const passwordReset = get(data, 'resetPassword', false)

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values: any): Promise<void> => {
      try {
        await resetPassword({ variables: { ...values, token } })
      } catch (error) {
        setError(error)
      }
    },
  })

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

  const handleChange = (event: any) => {
    setError(null)
    formik.setFieldValue(event.target.name, event.target.value)
    formik.handleChange(event)
  }

  if (!token) {
    return <Error statusCode={404} />
  }
  return (
    <Layout title='Reset your password | Genesis'>
      <section className='h-full flex-col self-center justify-center items-center'>
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
                <p className='text-2xl font-bold text-gray-800 mb-4 md:mb-8'>
                  Change your password
                </p>
                <div className='flex flex-col md:flex-row-reverse'>
                  <div className='flex flex-col md:w-1/2 md:ml-12'>
                    <p className='font-bold text-gray-800'>
                      Passwords must contain:
                    </p>
                    <ul className='list-disc list-inside mb-4 md:mb-0'>
                      {passwordRules && rulesElements}
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
                        <input
                          name='password'
                          className={passwordStyle}
                          type='password'
                          onChange={handleChange}
                          value={formik.values.password}
                          placeholder='Min. 6 characters'
                        />
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
                        {formik.values.confirmPassword.length >=
                          PASSWORD_MIN_LENGTH &&
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
      </section>
    </Layout>
  )
}

export default withApollo(withAuthUser(ResetPassword))
