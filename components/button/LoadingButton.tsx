import React from 'react'
import { useSpring, animated } from 'react-spring'

import get from 'lodash.get'
import Loader from 'components/loader'

type LoadingButtonProps = {
  loading?: boolean
}

const LoadingButton: React.FC<LoadingButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  loading,
  children,
  ...props
}) => {
  /* showLoader is used to stay in the "loading state" a bit longer to avoid loading flashes
   if the loading state is too short. */
  const [showLoader, setShowLoader] = React.useState(false)

  React.useEffect(() => {
    if (loading) {
      setShowLoader(true)
    }

    // Show loader a bits longer to avoid loading flash
    if (!loading && showLoader) {
      const timeout = setTimeout(() => {
        setShowLoader(false)
      }, 400)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [loading, showLoader])

  /* Capture the dimensions of the button before the loading happens
  so it doesn’t change size.
  These hooks can be put in a seprate file. */
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)
  const ref = React.useRef(null)

  React.useEffect(() => {
    const current: any = get(ref, 'current', null)
    if (current) {
      if (current.getBoundingClientRect().width) {
        setWidth(current.getBoundingClientRect().width)
      }
      if (current.getBoundingClientRect().height) {
        setHeight(current.getBoundingClientRect().height)
      }
    }
  }, [children])

  // Hooks used to fade in/out the loader or the button contents
  const fadeOutProps = useSpring({ opacity: showLoader ? 1 : 0 })
  const fadeInProps = useSpring({ opacity: showLoader ? 0 : 1 })

  return (
    <button
      {...props}
      ref={ref}
      style={
        showLoader
          ? {
              width: `${width}px`,
              height: `${height}px`,
            }
          : {}
      }>
      {showLoader ? (
        <animated.div style={fadeOutProps}>
          <Loader />
        </animated.div>
      ) : (
        <animated.div style={fadeInProps}>{children}</animated.div>
      )}
    </button>
  )
}

export default LoadingButton
