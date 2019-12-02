import * as React from 'react'
import Link from 'next/link'

const Header: React.FunctionComponent = () => (
  <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-2">
    <h1 className="text-2xl font-bold mx-4 my-2 text-center text-blue-800">
      <Link href="/">
        <>
          <span className="text-blue-900 font-light text-2xl">&Xi; &nbsp;</span>
          Genesis
        </>
      </Link>
    </h1>
  </nav>
)

export default Header
