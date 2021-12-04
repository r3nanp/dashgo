import { AppProps } from 'next/app'

//* PROVIDERS
import { ThemeProvider } from 'providers/ThemeProvider'
import { SidebarDrawerProvider } from 'providers/SidebarProvider'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SidebarDrawerProvider>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </SidebarDrawerProvider>
    </ThemeProvider>
  )
}

export default MyApp
