import React from 'react'

interface FormLabelProps {
  htmlFor: string
}

const FormLabel: React.FC<FormLabelProps> = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className='text-sm text-gray-500 mb-1'>
      {children}
    </label>
  )
}

export default FormLabel
