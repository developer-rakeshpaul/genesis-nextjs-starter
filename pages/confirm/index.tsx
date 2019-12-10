import Layout from 'layout/Layout'
import { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router'
import { useConfirmUserMutation } from 'lib/api-graphql'
import get from 'lodash.get'
import Loader from 'components/loader'
import { withApollo } from 'lib/withApollo'
import { SignInButton } from 'components/button'

const Confirm: NextPage = () => {
  const router = useRouter()
  const [confirmUser, { data, loading, error }] = useConfirmUserMutation()

  React.useEffect(() => {
    const token = get(router, 'query.token', null)
    async function confirm() {
      // You can await here
      await confirmUser({
        variables: {
          token
        }
      })
      // ...
    }
    confirm()
  }, [confirmUser, router])

  console.log(error)
  return (
    <Layout title='Home | Genesis'>
      <section className='h-full flex-col self-center justify-center items-center'>
        <div className='w-full text-center mx-auto'>
          {!loading && <Loader />}
          {get(data, 'data.confirm') && (
            <>
              <div className='text-gray-700 text-2xl font-normal leading-tight'>
                <i className='lni-thumbs-up text-4xl mr-2 leading-loose' />
                <span className='pb-6'>
                  Your account has been sucessfully verified.
                </span>
              </div>
              <SignInButton />
            </>
          )}
        </div>
      </section>
    </Layout>
  )
}
export default withApollo(Confirm)
