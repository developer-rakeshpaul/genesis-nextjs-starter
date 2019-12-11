import * as React from 'react'
// import Link from 'next/link'
import { useRouter } from 'next/router'
import { SignInButton } from 'components/button'
import { useAuthUser } from 'store'

const Header: React.FunctionComponent = () => {
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
      <div className='mx-auto px-4'>
        <div className='flex items-center md:justify-between py-4'>
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
            <span className='text-blue-900 font-light text-2xl'>
              &Xi; &nbsp;
            </span>
            Genesis
          </div>
          <div className='w-1/2 md:w-auto md:flex text-right'>
            {!user && router.pathname !== '/login' && <SignInButton />}
            {user && (
              <>
                <div>
                  <img
                    className='inline-block h-8 w-8 rounded-full'
                    src='https://ui-avatars.com/api/?rounded=true&name=Rakesh+Paul'
                    alt=''
                  />
                </div>
                <div className='hidden md:block md:flex md:items-center ml-2'>
                  <span className='text-blue-800 text-sm mr-1'>
                    Rakesh Paul
                  </span>
                  <div>
                    <svg
                      className='fill-current text-blue-800 h-4 w-4 block opacity-50'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z' />
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
