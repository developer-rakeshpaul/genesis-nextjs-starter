import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SignInButton } from 'components/button'
import { useAuthUser } from 'store'
import Menu from 'components/menu'

const Header: React.FC = () => {
  const router = useRouter()
  const user = useAuthUser(store => store.user)

  return (
    // <header className='absolute top-0 lef-0 w-full z-10 bg-white border-b border-gray-200'>
    // <nav className='flex items-center justify-between flex-wrap bg-gray-100 p-2'>
    //   <h1 className='text-2xl font-bold mx-4 my-2 text-center text-blue-800'>
    //     <Link href='/'>
    //       <a href='/'>
    //         <span className='text-blue-900 font-light text-2xl'>
    //           &Xi; &nbsp;
    //         </span>
    //         Genesis
    //       </a>
    //     </Link>
    //   </h1>
    //   {!user && router.pathname !== '/login' && <SignInButton />}
    // </nav>
    <div className='bg-gray-100'>
      <div className='mx-auto px-4 '>
        <div className='flex items-center md:justify-between py-4 relative'>
          {/* <div className='w-1/4 md:hidden'>
            <svg
              className='fill-current text-black h-8 w-8'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z' />
            </svg>
          </div> */}
          <div className='w-1/2 md:w-auto text-blue-800 text-2xl font-medium'>
            <Link href={user ? '/dashboard' : '/'}>
              <a href={user ? '/dashboard' : '/'}>
                <span className='text-blue-900 font-light text-2xl'>
                  &Xi; &nbsp;
                </span>
                Genesis
              </a>
            </Link>
          </div>
          <div className='w-1/2 md:w-auto md:flex text-right'>
            {!user && router.pathname !== '/login' && <SignInButton />}
            {user && <Menu />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
