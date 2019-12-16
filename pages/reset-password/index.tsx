import React from 'react'
import { object, string, ref } from 'yup'
import { useResetPasswordMutation } from 'lib/api-graphql'
import { withApollo } from 'lib/withApollo'
import Layout from 'layout/Layout'
import { withAuthUser } from 'lib/withAuthUser'
import { useFormik } from 'formik'
import get from 'lodash.get'

enum INPUT_STATE {
  DEFAULT,
  VALID,
  ERROR,
}
const PASSWORD_MIN_LENGTH = 8
const passwordRules = [
  'At least 1 upper case letter(A-Z)',
  'At least 1 number(0-9)',
  'At least 8 characters',
]

const [uc, numeric, min] = passwordRules

const resetPasswordSchema = object().shape({
  password: string()
    .test('uc', uc, val => {
      return /[A-Z]/.test(val)
    })
    .test('numeric', numeric, val => {
      return /[0-9]/.test(val)
    })
    .min(PASSWORD_MIN_LENGTH, min)
    .required('Please provide a password'),
  confirmPassword: string().when('password', {
    is: val => (val && val.length >= 8 ? true : false),
    then: string().oneOf([ref('password')], 'Passwords do not match'),
  }),
})

const getInputStyles = (type: INPUT_STATE) => {
  const baseStyle =
    'appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-blue-300 focus:placeholder-gray-500'
  let inputBorder = 'border border-blue-400 hover:border-blue-600'
  switch (type) {
    case INPUT_STATE.VALID:
      inputBorder = 'border border-green-400 hover:border-green-600'
      break
    case INPUT_STATE.ERROR:
      inputBorder = 'border border-red-500 hover:border-red-700'
      break
    default:
      inputBorder = 'border border-blue-400 hover:border-blue-600'
  }

  return baseStyle + ' ' + inputBorder
}

const ResetPassword: React.FC = () => {
  const [resetPassword, { data, loading, error }] = useResetPasswordMutation()
  const passwordResetResponse = get(data, 'resetPassword', false)

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values: any): Promise<void> => {
      try {
        await resetPassword({ variables: values })
      } catch (error) {
        console.error('register', error)
      }
    },
  })

  const rulesElements = passwordRules.map((rule: string, index: number) => {
    const password = get(formik, 'values.password')
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

  const getFieldClassName = (field: string) => {
    const len: number = get(formik, `values.${field}.length`, 0)
    const error = get(formik, `errors.${field}`, '')

    const className =
      len < PASSWORD_MIN_LENGTH
        ? getInputStyles(INPUT_STATE.DEFAULT)
        : error
        ? getInputStyles(INPUT_STATE.ERROR)
        : getInputStyles(INPUT_STATE.VALID)

    return className
  }

  console.log(passwordResetResponse, formik)
  return (
    <Layout title='Reset your password | Genesis'>
      <section className='h-full flex-col self-center justify-center items-center'>
        <div className='w-full max-w-2xl mx-auto '>
          {/* <h1 className='text-lg font-bold my-3 text-center text-gray-600'>
            Reset Password
          </h1> */}
          <div className='bg-white md:shadow-md md:rounded px-8 py-8 md:py-24'>
            <p className='text-2xl font-bold text-gray-800 mb-4 md:mb-8'>
              Change your password
            </p>
            {error && (
              <p className='mb-4 text-center text-red-500 text-xs italic'></p>
            )}
            <div className='flex flex-col md:flex-row-reverse'>
              <div className='flex flex-col md:w-1/2 md:ml-12'>
                <p className='font-bold text-gray-800'>
                  Passwords must contain:
                </p>
                <ul className='list-disc list-inside mb-4 md:mb-0'>
                  {passwordRules && rulesElements}
                </ul>
              </div>
              <form onSubmit={formik.handleSubmit} className='md:w-1/2'>
                <div className='mb-4'>
                  <label
                    className='block text-gray-700 text-sm mb-2'
                    htmlFor='password'>
                    New Password
                  </label>
                  <input
                    name='password'
                    className={getFieldClassName('password')}
                    type='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder='Min. 6 characters'
                  />
                </div>
                <div className='mb-6'>
                  <label
                    className='block text-gray-700 text-sm mb-2'
                    htmlFor='confirmPassword'>
                    Confirm New Password
                  </label>
                  <input
                    name='confirmPassword'
                    className={getFieldClassName('confirmPassword')}
                    type='password'
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    placeholder='Confirm Password'
                  />
                  {formik.values.confirmPassword.length ===
                    formik.values.password.length &&
                    formik.errors.confirmPassword && (
                      <div className='mt-1 text-red-500 text-xs italic'>
                        {formik.errors.confirmPassword}
                      </div>
                    )}
                </div>
                <div className='mt-6 flex items-center justify-between'>
                  <button
                    className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
                    type='submit'
                    disabled={formik.isSubmitting || loading}>
                    Change my password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default withApollo(withAuthUser(ResetPassword))
