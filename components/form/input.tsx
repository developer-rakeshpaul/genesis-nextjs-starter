import styled from 'styled-components'
import tw from 'tailwind.macro'
import { INPUT_STATE, getInputStyles } from 'hooks/useFormInput'

interface InputProps {
  state?: INPUT_STATE
}

export const FormInput = styled.input`
  ${tw`appearance-none rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none border border-gray-400 focus:border-blue-300`}
    ::placeholder {
    color: #cbd5e0;
  }
  :focus::placeholder {
    color: #a0aec0;
  }
`
export const ValidInput = styled(FormInput)`
  ${tw`border-green-300 focus:border-green-400`}
`
export const ErrorInput = styled(FormInput)`
  ${tw`border-red-300 focus:border-red-400`}
`

export const DisabledInput = styled(FormInput)`
  ${tw`text-gray-400`}
`

export const Input: React.FC<InputProps &
  React.HTMLProps<HTMLInputElement>> = ({ state, ...props }) => {
  return (
    <input
      {...props}
      className={getInputStyles(state || INPUT_STATE.DEFAULT)}
    />
  )
}
