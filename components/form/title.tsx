import React, { HTMLProps } from 'react'

export const Title: React.FC<HTMLProps<HTMLParagraphElement>> = ({
  children,
}) => {
  return (
    <p className='text-2xl font-bold text-blue-500 mb-4 md:mb-8'>{children}</p>
  )
}
