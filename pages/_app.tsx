import { withApollo } from 'lib/withApollo'
import { NextPageContext } from 'next'
import App from 'next/app'
import React from 'react'
import '../styles/index.css'

class Genesis extends App<NextPageContext> {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default withApollo(Genesis)
