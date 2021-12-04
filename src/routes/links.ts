import { IconNames } from 'utils/icon-utils'

type MenuRoutes = {
  id: number
  text: string
  href: string
  iconName: IconNames
}

export const menus: MenuRoutes[] = [
  { id: 1, text: 'Dashboard', href: '/dashboard', iconName: 'dashboard' },
  { id: 2, text: 'Usuários', href: '/users', iconName: 'contacts' },
  { id: 3, text: 'Formulários', href: '/forms', iconName: 'input' },
  { id: 4, text: 'Automação', href: '/automation', iconName: 'merge' }
]
