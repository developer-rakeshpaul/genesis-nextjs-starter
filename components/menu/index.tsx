import React from 'react'
import { useAuthUser } from 'store'
import Link from 'next/link'
import useEventListener from '@use-it/event-listener'

const Menu: React.FC = () => {
  const user = useAuthUser(store => store.user)
  const [open, setToggle] = React.useState(false)
  useEventListener('click', () => {
    if (open) {
      setToggle(false)
    }
  })

  return (
    <>
      <div className='relative'>
        <img
          className='inline-block h-8 w-8 rounded-full cursor-pointer'
          src={`https://ui-avatars.com/api/?rounded=true&name=${user.name}`}
          onClick={() => setToggle(!open)}
          alt=''
        />
      </div>
      {open && (
        <div
          className='bg-white max-w-md mx-auto rounded overflow-hidden shadow-lg absolute right-0'
          style={{ top: '54px' }}
        >
          <div className='text-center p-6  border-b'>
            <img
              className='h-24 w-24 rounded-full mx-auto'
              src={`https://ui-avatars.com/api/?rounded=true&name=${user.name}`}
              alt={user.name}
            />
            <p className='pt-2 text-lg font-semibold'>{user.name}</p>
            <p className='text-sm text-gray-600'>{user.email}</p>
            <div className='mt-5'>
              <Link href='/account'>
                <a
                  href='/account'
                  className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-700'
                >
                  Manage your Account
                </a>
              </Link>
            </div>
          </div>
          {/* <div className='border-b'>
            <a href='#' className='px-6 py-3 hover:bg-gray-200 flex'>
              <div className='w-8 h-8 bg-blue-700 rounded-full text-center align-middle text-white text-lg content-center'>
                D
              </div>
              <div className='pl-3'>
                <p className='text-sm font-semibold'>Johnny Depp</p>
                <p className='text-xs text-gray-600'>johnny.depp@example.org</p>
              </div>
            </a>
            <a href='#' className='px-6 py-3 hover:bg-gray-200 flex'>
              <div className='w-8 h-8 rounded-full text-center align-middle text-lg'>
                <img
                  className='w-6 h-6 rounded-full mx-auto'
                  src='https://img.icons8.com/windows/50/000000/add-user-male.png'
                />
              </div>
              <div className='pl-3'>
                <p className='text-sm font-semibold text-gray-700'>
                  Add another account
                </p>
              </div>
            </a>
          </div> */}
          <div className='border-b'>
            <div className='px-6 py-4 text-center'>
              <Link href='/logout'>
                <a
                  href='/logout'
                  className='border rounded py-2 px-4 text-xs font-semibold text-gray-70'
                >
                  Sign out
                </a>
              </Link>
            </div>
          </div>

          <div className='px-6 py-4'>
            <span className='inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2'>
              Privacy Policy
            </span>
            <span className='inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2'>
              Terms of Service
            </span>
          </div>
        </div>
        //   {/* <div className='hidden md:block md:flex md:items-center ml-2'>
        //   <span className='text-blue-800 text-sm mr-1'>
        //     {user.name}
        //   </span>
        //   <div>
        //     <svg
        //       className='fill-current text-blue-800 h-4 w-4 block opacity-50'
        //       xmlns='http://www.w3.org/2000/svg'
        //       viewBox='0 0 20 20'
        //     >
        //       <path d='M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z' />
        //     </svg>
        //   </div>
        // </div> */}
      )}
    </>
  )
}

export default Menu
