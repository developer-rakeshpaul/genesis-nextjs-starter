import React from 'react'
import Link from 'next/link'

const SignInButton: React.FC = () => (
  <Link href='/login'>
    <a
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded'
      href='/login'>
      Sign In
    </a>
  </Link>
)
export default SignInButton
