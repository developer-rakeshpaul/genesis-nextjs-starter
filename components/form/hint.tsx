import React from 'react'

export const FormHint: React.FC<{}> = ({ children }) => {
  return <p className='text-xs text-gray-500 my-1 leading-tight'>{children}</p>
}
