import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

//* PROVIDERS
import { AppProvider } from 'providers/AppProvider'
import { makeServer } from 'lib/mirage'

if (process.env.NODE_ENV === 'development') makeServer()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} />
      </AnimatePresence>
    </AppProvider>
  )
}

export default MyApp
