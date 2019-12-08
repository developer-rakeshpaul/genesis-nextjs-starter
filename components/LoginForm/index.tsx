import * as React from 'react'
import * as Yup from 'yup'
import Link from 'next/link'
import { Field, FieldProps, Form, Formik, FormikProps } from 'formik'

interface LoginFormProps {
  email: string
  password: string
  remember: boolean
}

const initialValues: LoginFormProps = {
  email: '',
  password: '',
  remember: false
}

const LoginSchema = Yup.object().shape({
  password: Yup.string().required('Password is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
})

const LoginForm: React.FunctionComponent<{
  error?: string
  onSubmit?: (values: LoginFormProps) => void
}> = ({ children, onSubmit, error }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={(values: LoginFormProps) => {
      console.log(JSON.stringify(values))
      if (onSubmit) {
        onSubmit(values)
      }
    }}
    validationSchema={LoginSchema}
    render={({ isSubmitting }: FormikProps<LoginFormProps>) => (
      <Form className="bg-white md:shadow-md md:rounded px-8 pt-6 pb-8 mb-4">
        <p className="mb-2 text-center text-red-500 text-xs italic">{error}</p>
        <Field
          name="email"
          render={({ form }: FieldProps<LoginFormProps>) => (
            <div className="my-6">
              {/* <input
                className='appearance-none border border-blue-400 hover:border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-blue-300 focus:placeholder-gray-500'
                type='email'
                {...field}
                placeholder='ex. johndoe@somemail.com'
              /> */}
              {form.touched.email && form.errors.email && (
                <div className="mt-1 text-red-500 text-xs italic">
                  {form.errors.email}
                </div>
              )}
            </div>
          )}
        />
        <Field
          name="password"
          render={({ form }: FieldProps<LoginFormProps>) => (
            <div className="mb-2">
              {/* <input
                className='appearance-none border border-blue-400 hover:border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-blue-300 focus:placeholder-gray-500'
                type='password'
                {...field}
                placeholder='Min. 6 characters'
              /> */}
              {form.touched.password && form.errors.password && (
                <div className="mt-1 text-red-500 text-xs italic">
                  {form.errors.password}
                </div>
              )}
            </div>
          )}
        />
        <div className="mb-2">
          <p className="block text-right">
            <Link href="/forgotpassword">
              <a className="text-sm text-blue-600 hover:text-blue-800">
                Forgot Password?
              </a>
            </Link>
          </p>
        </div>
        <div className="mb-2">
          <input id="remember" name="remember" type="checkbox" />
          <span className="mt-4 text-center text-gray-500 text-xs ml-2">
            Remember me
          </span>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            type="submit"
            disabled={isSubmitting}
          >
            Sign In
          </button>
        </div>
        {children}
      </Form>
    )}
  />
)

export default LoginForm
