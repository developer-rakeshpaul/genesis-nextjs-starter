import Head from 'next/head'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

// import Menu from 'components/menu'

interface Props {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Genesis',
}) => {
  return (
    <div className='bg-gray-200 flex flex-col justify-between h-full min-h-screen'>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          href='https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://cdn.lineicons.com/1.0.1/LineIcons.min.css'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <div className='block'>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
