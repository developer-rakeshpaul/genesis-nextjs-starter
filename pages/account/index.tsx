import React from 'react'
import { withApollo } from 'lib/withApollo'
import { NextPage } from 'next'
import { withAuthSync } from 'lib/withAuthSync'
import Layout from 'layout/Layout'
import { ChangePassword, Profile } from 'components/account'

enum Settings {
  PROFILE = 'profile',
  SECURITY = 'security',
}

const Account: NextPage = ({ user }: any) => {
  const [setting, setSetting] = React.useState(Settings.PROFILE)

  const getStyle = (val: Settings) => {
    if (val === setting) {
      return 'p-2 pl-2 text-blue-500 border-l-4 border-blue-600 cursor-pointer'
    }
    return 'p-2 pl-3 text-blue-500 cursor-pointer'
  }

  return (
    <Layout title='Account | Genesis'>
      <div className='flex flex-col md:flex-row self-start w-full lg:w-2/3 m-4 lg:mx-auto '>
        <div className='w-full shadow md:w-1/4 lg:max-w-xs rounded bg-white mr-4 mb-2 md:mb-0'>
          <p className='p-2 border-b border-gray-300 text-gray-600 font-bold text-md'>
            Personal settings
          </p>
          <ul>
            <li
              className={getStyle(Settings.PROFILE)}
              onClick={() => setSetting(Settings.PROFILE)}>
              Profile
            </li>
            <hr />
            <li
              className={getStyle(Settings.SECURITY)}
              onClick={() => setSetting(Settings.SECURITY)}>
              Security
            </li>
            <hr />
          </ul>
        </div>
        <div className='w-full shadow md:w-3/4 rounded bg-white mx-auto px-4'>
          {setting === Settings.PROFILE && <Profile user={user} />}
          {setting === Settings.SECURITY && <ChangePassword />}
        </div>
      </div>
    </Layout>
  )
}

export default withApollo(withAuthSync(Account))
