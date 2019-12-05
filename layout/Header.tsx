import * as React from 'react'
import Link from 'next/link'

const Header: React.FunctionComponent = () => (
  // <header className='absolute top-0 lef-0 w-full z-10 bg-white border-b border-gray-200'>
  <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-2">
    <h1 className="text-2xl font-bold mx-4 my-2 text-center text-blue-800">
      <Link href="/">
        <a href="/">
          <span className="text-blue-900 font-light text-2xl">&Xi; &nbsp;</span>
          Genesis
        </a>
      </Link>
    </h1>
    <Link href="/login">
      <a
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-full"
        href="/login"
      >
        Login
      </a>
    </Link>
  </nav>
  // </header>
)

export default Header
