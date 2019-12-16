import React, { Component, Fragment } from 'react'
// import HTTPStatus from 'http-status'
// tslint:disable-next-line: no-submodule-imports
import Head from 'next/head'
// import Layout from '@layout/Layout'

interface IProps {
  message?: string
  statusCode?: number
}

export default class Error extends Component<IProps> {
  static getInitialProps({ res, err }: { res: any; err: any }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : ''
    return { statusCode }
  }

  render() {
    const { message = 'Page Not found', statusCode = 404 } = this.props
    const title =
      statusCode === 404
        ? 'This page could not be found'
        : 'An unexpected error has occurred' // HTTPStatus[statusCode] ||

    return (
      <Fragment>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <title>
            {statusCode}: {message || title}
          </title>
        </Head>
        {/* <Layout title=''> */}
        <section className='main-container center dt w-100 pa3'>
          <div className='dtc v-mid tc white ph3 ph4-l'>
            <h1 className='f4 fw4 dark-gray tc lh-title'>
              {statusCode && <span>{statusCode}</span>}
              <span className='f3 fw2 ph1 pt3 lh-copy'>|</span>
              <span className='f5 fw3'>{message || title}</span>
            </h1>
          </div>
        </section>
        {/* </Layout> */}
      </Fragment>
    )
  }
}
