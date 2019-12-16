import { object, string } from 'yup'
import { passwordSchema, emailSchema } from 'utils/schema'
import { useSignupMutation } from 'lib/api-graphql'
import useForm from './useForm'

export interface RegisterFormProps {
  email: string
  password: string
  name: string
}

export const initialValues: RegisterFormProps = {
  email: '',
  password: '',
  name: '',
}

export const validationSchema = object().shape({
  password: passwordSchema,
  name: string()
    .required()
    .min(2),
  email: emailSchema,
})

function useRegistrationForm() {
  const [signupMutation, { data, loading }] = useSignupMutation()

  const { formik, error, setError, handleChange } = useForm({
    initialValues,
    validationSchema,
    onSubmit: async (data: any): Promise<void> => {
      try {
        await signupMutation({ variables: { data } })
      } catch (error) {
        setError(error)
      }
    },
  })

  return { formik, data, loading, error, setError, handleChange }
}

export default useRegistrationForm
