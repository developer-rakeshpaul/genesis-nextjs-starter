import { useRouter } from 'next/router'
import { ref, object, string } from 'yup'
import { passwordSchema, PASSWORD_MIN_LENGTH } from 'utils/schema'
import { useResetPasswordMutation } from 'lib/api-graphql'
import useForm from './useForm'

const validationSchema = object().shape({
  password: passwordSchema,
  confirmPassword: string().when('password', {
    is: val => (val && val.length >= PASSWORD_MIN_LENGTH ? true : false),
    then: string().oneOf([ref('password')], 'Passwords do not match'),
  }),
})

function useResetPasswordForm() {
  const router = useRouter()
  const { token } = router.query
  const [resetPassword, { data, loading }] = useResetPasswordMutation({
    fetchPolicy: 'no-cache',
  })

  const { formik, error, setError, handleChange } = useForm({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values: any): Promise<void> => {
      try {
        await resetPassword({ variables: { ...values, token } })
      } catch (error) {
        setError(error)
      }
    },
  })

  return { formik, data, loading, error, setError, handleChange, token }
}

export default useResetPasswordForm
