import * as React from 'react'
// import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

interface Props {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Genesis'
}) => (
  <div className="bg-gray-100 flex flex-col justify-between h-full min-h-screen">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Overpass:400,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <div className="block">{children}</div>
    <Footer />
  </div>
)

export default Layout
