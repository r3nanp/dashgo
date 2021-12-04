import { ReactNode } from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'

type NavSectionProps = {
  title: string
  children: ReactNode
}

export const NavSection = ({ children, title }: NavSectionProps) => {
  return (
    <Box>
      <Text fontSize="small" fontWeight="bold" color="gray.400">
        {title}
      </Text>

      <Stack spacing="4" mt="8" alignItems="stretch">
        {children}
      </Stack>
    </Box>
  )
}
