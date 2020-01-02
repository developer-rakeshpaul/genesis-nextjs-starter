import { confirmPasswordSchema } from './../utils/schema'
import { object, string } from 'yup'
import { passwordSchema } from 'utils/schema'
import { useChangePasswordMutation } from 'lib/api-graphql'
import useForm from './useForm'

const validationSchema = object().shape({
  currentPassword: string().required(
    'Your current password is required to set new one ',
  ),
  password: passwordSchema,
  confirmPassword: confirmPasswordSchema,
  // string().when('password', {
  //   is: val => (val && val.length >= PASSWORD_MIN_LENGTH ? true : false),
  //   then: string().oneOf([ref('password')], 'Passwords do not match'),
  // }),
})

function useChangePasswordForm() {
  const [changePassword, { data, loading }] = useChangePasswordMutation({
    fetchPolicy: 'no-cache',
  })

  const { formik, error, setError, handleChange } = useForm({
    initialValues: {
      currentPassword: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values: any): Promise<void> => {
      try {
        await changePassword({ variables: { ...values } })
      } catch (error) {
        console.log(error)
        setError(error)
      }
    },
  })

  return { formik, data, loading, error, setError, handleChange }
}

export default useChangePasswordForm
