import { AppProps } from 'next/app'

//* PROVIDERS
import { ThemeProvider } from 'providers/ThemeProvider'
import { SidebarDrawerProvider } from 'providers/SidebarProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ThemeProvider>
  )
}

export default MyApp
