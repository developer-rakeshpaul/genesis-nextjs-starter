import React from 'react'

export const FormWrapper: React.FC = ({ children }) => {
  return (
    <section className='h-full flex-col self-center justify-center items-center'>
      <div className='w-full max-w-md mx-auto'>{children}</div>
    </section>
  )
}
