import Router from 'next/router'
import { isServer } from './../utils/index'

export default (context: any, target: string) => {
  if (isServer) {
    // server
    // 303: "See other"
    context.res.writeHead(303, { Location: target })
    context.res.end()
  } else {
    // In the browser, we just pretend like this never even happened ;)
    Router.replace(target)
  }
}
