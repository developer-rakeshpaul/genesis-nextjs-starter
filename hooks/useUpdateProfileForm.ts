import { UpdateProfileMutationResult } from './../lib/hasura-graphql'
import React from 'react'

import { useAuthUser } from 'store'
import { object, string } from 'yup'
import useForm from './useForm'
import { useUpdateProfileMutation } from 'lib/hasura-graphql'

const validationSchema = object().shape({
  name: string().required('Please set your name'),
  bio: string(),
})

function useUpdateProfileForm() {
  const { id, name, bio, email } = useAuthUser(store => store.user)
  const setUser = useAuthUser(state => state.setUser)
  const [loading, setLoading] = React.useState(false)
  const [updateProfile, { data }] = useUpdateProfileMutation({
    fetchPolicy: 'no-cache',
  })

  const { formik, error, setError, handleChange } = useForm({
    initialValues: {
      name,
      bio: bio || '',
      email,
    },
    validationSchema,
    onSubmit: async ({ bio, name }: any): Promise<void> => {
      try {
        setLoading(true)
        setError(null)
        const result: Partial<UpdateProfileMutationResult> = await updateProfile(
          {
            variables: { id, set: { bio, name } },
            context: { clientName: 'hasura' },
          },
        )

        setUser(result.data?.update_user?.returning)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error)
      }
    },
  })

  return { formik, data, loading, error, setError, handleChange }
}

export default useUpdateProfileForm
