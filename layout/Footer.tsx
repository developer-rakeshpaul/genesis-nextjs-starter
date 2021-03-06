import React from 'react'

const Footer: React.FunctionComponent = () => (
  <div className='w-full mx-auto bg-gray-100'>
    <p className='text-center text-gray-500 text-sm my-4'>
      ©2019 &nbsp;
      <a
        className='text-blue-700 hover:text-blue-500'
        href='https://xtrios.com'
        target='_blank'
        rel='noreferrer noopener'>
        Xtrios Innovations Inc
      </a>
      . All rights reserved.
    </p>
  </div>
)

export default Footer
