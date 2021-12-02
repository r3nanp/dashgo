import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '@chakra-ui/react'
import { theme } from 'styles/theme'

export const customRender = (
  UI: React.ReactNode,
  { ...rest }: RenderOptions = {}
) => render(<ThemeProvider theme={theme}>{UI}</ThemeProvider>, rest)

export * from '@testing-library/react'
export { customRender as render }
