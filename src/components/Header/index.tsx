import { Flex, useBreakpointValue } from '@chakra-ui/react'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBar } from './SearchBar'
import { useSidebarDrawer } from 'hooks/useSidebarDrawer'
import { IconButton } from 'components'

export type HeaderProps = {
  avatar_url: string
  email: string
  name: string
}

export const Header = ({ avatar_url, email, name }: HeaderProps) => {
  const { disclosure } = useSidebarDrawer()

  const { onOpen } = disclosure

  const isWide = useBreakpointValue({
    base: false,
    lg: true
  })

  const profile = { avatar_url, email, name }

  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      h="20"
      maxWidth={1480}
      mx="auto"
      mt="4"
      px="6"
    >
      {!isWide && (
        <IconButton
          aria-label="Open navigation"
          iconName="menu"
          variant="unstyled"
          fontSize="20"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />

      {isWide && <SearchBar />}

      <Flex alignItems="center" ml="auto">
        <NotificationsNav />

        <Profile {...profile} showProfileData={isWide} />
      </Flex>
    </Flex>
  )
}
