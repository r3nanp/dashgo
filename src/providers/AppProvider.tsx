import { ReactNode } from 'react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { queryClient } from 'lib/react-query'
import { SidebarDrawerProvider } from './SidebarProvider'
import { ThemeProvider } from './ThemeProvider'

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
        <ThemeProvider>
          <SidebarDrawerProvider>{children}</SidebarDrawerProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}
