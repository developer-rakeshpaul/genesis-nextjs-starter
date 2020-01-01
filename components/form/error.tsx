import React from 'react'
import { ApolloError } from 'apollo-boost'
import { head } from 'ramda'
import get from 'lodash.get'

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
