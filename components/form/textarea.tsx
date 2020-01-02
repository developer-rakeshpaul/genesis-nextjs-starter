import styled from 'styled-components'
import tw from 'tailwind.macro'

export const TextArea = styled.textarea`
  ${tw`appearance-none rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none border border-gray-400 focus:border-blue-300`}
    ::placeholder {
    color: #cbd5e0;
  }
  :focus::placeholder {
    color: #a0aec0;
  }
`
