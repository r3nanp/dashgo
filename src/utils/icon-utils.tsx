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
  RiMailLine
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
    lock: RiLockLine
  }

  return icons[iconName] ?? icons.dashboard
}
