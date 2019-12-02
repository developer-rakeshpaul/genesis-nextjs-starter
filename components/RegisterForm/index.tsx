import { Formik, FormikProps } from 'formik'
import Link from 'next/link'
import * as React from 'react'
import * as Yup from 'yup'

interface RegisterFormProps {
  email: string
  password: string
  name: string
}

const initialValues: RegisterFormProps = {
  email: '',
  password: '',
  name: ''
}

const RegisterSchema = Yup.object().shape({
  password: Yup.string()
    .required()
    .min(6),
  name: Yup.string()
    .required()
    .min(2),
  email: Yup.string()
    .email()
    .required()
})

const RegisterForm: React.FunctionComponent<{
  error?: string
  onSubmit?: (values: RegisterFormProps) => void
}> = ({ children, onSubmit, error }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={(values: RegisterFormProps) => {
      console.log(JSON.stringify(values))
      if (onSubmit) {
        onSubmit(values)
      }
    }}
    validationSchema={RegisterSchema}
    render={({ isSubmitting }: FormikProps<RegisterFormProps>) => (
      <form className="bg-white md:shadow-md md:rounded px-8 pt-6 pb-8 mb-4">
        <p className="mb-2 text-center text-red-500 text-xs italic">{error}</p>
        <div className="my-6">
          {/* <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
                type='name'
                {...field}
                placeholder='ex. John Doe'
              />
              {form.touched.name && form.errors.name && (
                <div className='mt-1 text-red-500 text-xs italic'>
                  {form.errors.name}
                </div>
              )} */}
        </div>
        <div className="my-6">
          {/* <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
                type='email'
                {...field}
                placeholder='ex. johndoe@somemail.com'
              /> 
              {form.touched.email && form.errors.email && (
                <div className='mt-1 text-red-500 text-xs italic'>
                  {form.errors.email}
                </div>
              )} */}
        </div>
        <div className="mb-2">
          {/* <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
                type='password'
                {...field}
                placeholder='Min. 6 characters'
              /> 
              {form.touched.password && form.errors.password && (
                <div className='mt-1 text-red-500 text-xs italic'>
                  {form.errors.password}
                </div>
              )} */}
        </div>
        <div className="my-6">
          <p className="text-xs">
            By clicking "Create your account" below, you agree to our
            <Link href="/termsofservice">
              <span className="text-blue-600"> terms of service </span>
            </Link>
            <span>and</span>
            <Link href="/privacypolicy">
              <span className="text-blue-600"> privacy policy</span>
            </Link>
          </p>
        </div>{' '}
        <div className="mt-4 flex items-center justify-between">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            type="submit"
            disabled={isSubmitting}
          >
            Create Your Account
          </button>
        </div>
        {children}
      </form>
    )}
  />
)

export default RegisterForm
