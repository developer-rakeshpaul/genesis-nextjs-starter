import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SignInButton } from 'components/button'

const Header: React.FunctionComponent = () => {
  const router = useRouter()

  return (
    // <header className='absolute top-0 lef-0 w-full z-10 bg-white border-b border-gray-200'>
    <nav className='flex items-center justify-between flex-wrap bg-gray-100 p-2'>
      <h1 className='text-2xl font-bold mx-4 my-2 text-center text-blue-800'>
        <Link href='/'>
          <a href='/'>
            <span className='text-blue-900 font-light text-2xl'>
              &Xi; &nbsp;
            </span>
            Genesis
          </a>
        </Link>
      </h1>
      {router.pathname !== '/login' && <SignInButton />}
    </nav>
    // </header>
  )
}

export default Header
