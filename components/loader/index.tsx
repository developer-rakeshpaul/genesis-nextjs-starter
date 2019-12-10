// Sample styled-component with tailwind classes

import styled, { keyframes } from 'styled-components'
import tw from 'tailwind.macro'

// Create the keyframes
const load = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loader = styled('span')`
  ${tw`w-6 h-6 rounded-full`}
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-left: 4px solid;
  animation: ${load} 1s infinite linear;
`
export default Loader
