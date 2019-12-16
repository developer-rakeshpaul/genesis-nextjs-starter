import React from 'react'
import { ApolloError } from 'apollo-boost'

interface Props {
  error: ApolloError
}
export const FormError: React.FC<Props> = ({ error }) => {
  return <p className='text-red-500 text-xs italic'>{error.message}</p>
}
