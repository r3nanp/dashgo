import { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles/theme'

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
