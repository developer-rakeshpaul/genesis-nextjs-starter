import React from 'react'
import App from 'next/app'
import { withApollo } from 'lib/withApollo'
import { NextContextWithApollo } from 'interfaces/withApolloContex'
import '../styles/index.css'

class Genesis extends App<NextContextWithApollo> {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default withApollo(Genesis)
