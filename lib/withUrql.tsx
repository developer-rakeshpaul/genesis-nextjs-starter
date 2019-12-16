import React from 'react'
import { Provider } from 'urql'

import ssrPrepass from 'react-ssr-prepass'
import initUrqlClient from './initUrql'

const withUrqlClient = (PageComponent: any) => {
  const WithUrql = (props: any) => {
    const urqlClient = React.useMemo(
      () => props.urqlClient || initUrqlClient(props.urqlState)[0],
      [props.urqlClient, props.urqlState],
    )
    return (
      <Provider value={urqlClient}>
        <PageComponent {...props} urqlClient={urqlClient} />
      </Provider>
    )
  }

  WithUrql.getInitialProps = async (ctx: any) => {
    const { AppTree } = ctx
    // Run the wrapped component's getInitialProps function
    let appProps = {}
    if (PageComponent.getInitialProps)
      appProps = await PageComponent.getInitialProps(ctx)

    // getInitialProps is universal, but we only want
    // to run server-side rendered suspense on the server
    const isBrowser = typeof window !== 'undefined'
    if (isBrowser) return appProps

    const [urqlClient, ssrCache] = initUrqlClient()

    // Run suspense and hence all urql queries
    await ssrPrepass(
      <AppTree
        pageProps={{
          ...appProps,
          urqlClient,
        }}
      />,
    )

    // Extract query data from the urql store
    // Extract the SSR query data from urql's SSR cache
    const urqlState = ssrCache.extractData()

    return {
      ...appProps,
      urqlState,
    }
  }

  return WithUrql
}

export default withUrqlClient
