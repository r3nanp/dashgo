import { Stack } from '@chakra-ui/react'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export const SidebarNav = () => {
  return (
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
  )
}
