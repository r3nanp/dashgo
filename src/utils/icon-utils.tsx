import { IconType } from 'react-icons'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
  RiNotificationLine,
  RiUserAddLine,
  RiSearchLine,
  RiLockLine,
  RiMailLine,
  RiAddLine,
  RiPencilLine,
  RiUser2Line,
  RiMenuLine,
  RiLoaderLine,
  RiLoader2Line
} from 'react-icons/ri'

export type IconNames =
  | 'contacts'
  | 'dashboard'
  | 'merge'
  | 'input'
  | 'notification'
  | 'userAdd'
  | 'search'
  | 'lock'
  | 'email'
  | 'add'
  | 'edit'
  | 'person'
  | 'menu'
  | 'loading'

type Icon = Record<IconNames, IconType>

export const iconUtils = (iconName: IconNames) => {
  const icons: Icon = {
    contacts: RiContactsLine,
    dashboard: RiDashboardLine,
    input: RiInputMethodLine,
    merge: RiGitMergeLine,
    notification: RiNotificationLine,
    userAdd: RiUserAddLine,
    search: RiSearchLine,
    email: RiMailLine,
    lock: RiLockLine,
    add: RiAddLine,
    edit: RiPencilLine,
    person: RiUser2Line,
    menu: RiMenuLine,
    loading: RiLoader2Line
  }

  return icons[iconName] ?? icons.dashboard
}
