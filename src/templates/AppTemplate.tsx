import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'
import { Sidebar } from 'components'

type AppTemplateProps = {
  children: ReactNode
}

export const AppTemplate = ({ children }: AppTemplateProps) => {
  return (
    <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
      <Sidebar />

      {children}
    </Flex>
  )
}
