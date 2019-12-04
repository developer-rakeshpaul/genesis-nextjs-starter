import { useFormik } from 'formik'
import { setAccessToken } from 'lib/accessToken'
import { LoginMutationVariables, useLoginMutation } from 'lib/api-graphql'
import get from 'lodash.get'
import { NextPage } from 'next'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import * as Yup from 'yup'
import Layout from 'layout/Layout'

// import redirect from '../lib/redirect'
// import checkLoggedIn from '../lib/checkLoggedIn'

interface LoginFormProps {
  email: string
  password: string
}
const initialValues: LoginFormProps = {
  email: '',
  password: ''
}

const LoginSchema = Yup.object().shape({
  password: Yup.string().required('Password is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
})

const Login: NextPage = () => {
  const [loginMutation] = useLoginMutation()
  const [error, setError] = React.useState(null)

  const onSubmit = async (variables: LoginMutationVariables) => {
    try {
      const response = await loginMutation({
        variables
      })
      const { token } = get(response, 'data.login', {})
      if (token) {
        setAccessToken(token)
      }
      Router.push('/')
    } catch (e) {
      console.error(e)
      setError(e.message)
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit
  })

  return (
    <Layout title="Login | Genesis">
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
              {error}
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
            <div>
              <p className="block text-right">
                <Link href="/forgotpassword">
                  <a className="text-sm text-blue-600 hover:text-blue-800">
                    Forgot Password?
                  </a>
                </Link>
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
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
              <a href="/register" className="ml-2 text-blue-600">
                Create account
              </a>
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Login
