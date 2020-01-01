import React from 'react'
import { useResendConfirmEmailMutation } from 'lib/api-graphql'
import { LoadingButton } from 'components/button'

interface ConfirmProps {
  email: string
}

const ResendConfirmation: React.FC<ConfirmProps> = ({ email }) => {
  const [
    resendConfirmEmailMutation,
    { data, loading, error },
  ] = useResendConfirmEmailMutation({
    variables: {
      email, // value for 'email'
    },
  })

  const handleResendConfirmation = async () => {
    try {
      await resendConfirmEmailMutation()
    } catch (error) {}
    console.log(data, error)
  }

  return (
    <>
      <LoadingButton
        className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
        onClick={handleResendConfirmation}
        loading={loading}
        disabled={loading}>
        Resend Confirmation Link
      </LoadingButton>
    </>
  )
}

export default ResendConfirmation
