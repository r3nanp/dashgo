import { Stack } from '@chakra-ui/react'

import { menus } from 'routes/links'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export const SidebarNav = () => {
  return (
    <Stack spacing="12" alignItems="flex-start">
      <NavSection title="GERAL">
        {menus.slice(0, 2).map(menu => (
          <NavLink
            key={menu.id}
            href={menu.href}
            link={menu.text}
            iconName={menu.iconName}
          />
        ))}
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        {menus.slice(2, 4).map(menu => (
          <NavLink
            key={menu.id}
            href={menu.href}
            link={menu.text}
            iconName={menu.iconName}
          />
        ))}
      </NavSection>
    </Stack>
  )
}
