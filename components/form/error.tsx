import React from 'react'
import { ApolloError } from 'apollo-boost'
import get from 'lodash.get'
import head from 'lodash.head'

interface Props {
  error: ApolloError
}
export const FormError: React.FC<Props> = ({ error }) => {
  const graphQLError = head(get(error, 'graphQLErrors', []))
  return (
    <p className='text-red-500 text-xs italic'>
      {graphQLError?.message || error.message}
    </p>
  )
}
