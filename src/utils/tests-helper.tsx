import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'providers/ThemeProvider'

export const customRender = (
  UI: React.ReactNode,
  { ...rest }: RenderOptions = {}
) => render(<ThemeProvider>{UI}</ThemeProvider>, rest)

export * from '@testing-library/react'
export { customRender as render }
