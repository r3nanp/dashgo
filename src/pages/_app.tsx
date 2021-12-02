import { AppProps } from 'next/app'

//* PROVIDERS
import { ThemeProvider } from 'providers/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
