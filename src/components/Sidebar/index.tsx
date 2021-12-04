import { Box, Stack } from '@chakra-ui/react'
import { NavSection } from './NavSection'
import { NavLink } from './NavLink'

export const Sidebar = () => {
  return (
    <Box as="aside" width="64" mr="8">
      <Stack spacing="12" alignItems="flex-start">
        <NavSection title="GERAL">
          <NavLink link="Dashboard" iconName="dashboard" />

          <NavLink link="Usuários" iconName="contacts" />
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <NavLink link="Formulários" iconName="input" />
          <NavLink link="Automação" iconName="merge" />
        </NavSection>
      </Stack>
    </Box>
  )
}
