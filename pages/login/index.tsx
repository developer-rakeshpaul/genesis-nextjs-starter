import { useFormik } from 'formik'
import { LoginMutationVariables, useLoginMutation } from 'lib/api-graphql'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import * as Yup from 'yup'

// import redirect from '../lib/redirect'
// import checkLoggedIn from '../lib/checkLoggedIn'

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

const Login: NextPage = () => {
  const [login] = useLoginMutation()

  const onSubmit = async (variables: LoginMutationVariables) => {
    const response = await login({
      variables
    })
    console.log(response)
  }

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit
  })

  return (
    <section className="h-full flex-col self-center justify-center items-center">
      <div className="w-full max-w-sm mx-auto">
        <h1 className="text-lg font-bold my-3 text-center text-gray-600">
          Login
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white md:shadow-md md:rounded px-8 pt-6 pb-8 mb-4"
        >
          <p className="mb-2 text-center text-red-500 text-xs italic">
            {/* {error} */}
          </p>
          <div className="my-6">
            <input
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="ex. johndoe@somemail.com"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="mt-1 text-red-500 text-xs italic">
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className="mb-2">
            <input
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Min. 6 characters"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="mt-1 text-red-500 text-xs italic">
                {formik.errors.password}
              </div>
            )}
          </div>
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
            <input
              id="remember"
              name="remember"
              type="checkbox"
              onChange={formik.handleChange}
              checked={formik.values.remember}
            />
            <span className="mt-4 text-center text-gray-500 text-xs ml-2">
              Remember me
            </span>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-500 text-xs">
          Not yet a member?
          <Link href="/register">
            <a className="ml-2 text-blue-600">Create account</a>
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Login
