import { setAccessToken } from 'lib/accessToken'
import { useLoginMutation } from 'lib/api-graphql'
import get from 'lodash.get'
import { useRouter } from 'next/router'
import { useAuthUser } from 'store'
import { emailSchema } from 'utils/schema'
import { object, string } from 'yup'
import { LoginMutationVariables } from './../lib/api-graphql'
import useForm from './useForm'

interface LoginFormProps {
  email: string
  password: string
}

const initialValues: LoginFormProps = {
  email: '',
  password: '',
}

const validationSchema = object().shape({
  password: string().required('A password is required to login'),
  email: emailSchema,
})

function useLoginForm() {
  const router = useRouter()
  const [loginMutation, { data, loading }] = useLoginMutation()
  const setUser = useAuthUser(store => store.setUser)

  const { formik, error, setError, handleChange } = useForm({
    initialValues,
    validationSchema,
    onSubmit: async (variables: LoginMutationVariables) => {
      try {
        const response = await loginMutation({
          variables,
        })

        const { token, user } = get(response, 'data.login', {})
        if (token) {
          setAccessToken(token)
          setUser(user)
        }
        const redirect = get(router, 'query.redirect')
        if (redirect) {
          router.replace(redirect)
        } else {
          router.replace('/dashboard')
        }
      } catch (e) {
        setError(e)
      }
    },
  })
  return { formik, data, loading, error, setError, handleChange }
}

export default useLoginForm
