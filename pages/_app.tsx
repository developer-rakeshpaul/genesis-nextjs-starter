import { ApolloProvider } from '@apollo/react-hoc'
import { GenesisContext } from 'interfaces/withApolloContex'
import { withApollo } from 'lib/withApollo'
import App from 'next/app'
import React from 'react'
import '../styles/index.css'

class Genesis extends App<GenesisContext> {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default withApollo(Genesis)
