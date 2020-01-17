import React from 'react'
import { ChangePasswordMutationVariables } from './../lib/api-graphql'
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
  const [loading, setLoading] = React.useState(false)
  const [changePassword, { data }] = useChangePasswordMutation({
    fetchPolicy: 'no-cache',
  })

  const { formik, error, setError, handleChange } = useForm({
    initialValues: {
      currentPassword: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async ({
      password,
      currentPassword,
    }: ChangePasswordMutationVariables): Promise<void> => {
      try {
        setLoading(true)
        setError(null)
        await changePassword({ variables: { password, currentPassword } })
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error)
      }
    },
  })

  return { formik, data, loading, error, setError, handleChange }
}

export default useChangePasswordForm
