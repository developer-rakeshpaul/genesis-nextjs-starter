import { object } from 'yup'
import { emailSchema } from 'utils/schema'
import { useForgotPasswordMutation } from 'lib/api-graphql'
import useForm from './useForm'

const validationSchema = object().shape({
  email: emailSchema,
})

function useForgotPasswordForm() {
  const [forgotPassword, { data, loading }] = useForgotPasswordMutation({
    fetchPolicy: 'no-cache',
  })

  const { formik, error, setError, handleChange } = useForm({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async (values: any): Promise<void> => {
      try {
        await forgotPassword({ variables: values })
      } catch (error) {
        setError(error)
      }
    },
  })

  return { formik, data, loading, error, setError, handleChange }
}

export default useForgotPasswordForm
