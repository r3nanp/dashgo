import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBar } from './SearchBar'

export type HeaderProps = {
  avatar_url: string
  email: string
  name: string
}

export const Header = ({ avatar_url, email, name }: HeaderProps) => {
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
      <Logo />

      <SearchBar />

      <Flex alignItems="center" ml="auto">
        <NotificationsNav />

        <Profile {...profile} />
      </Flex>
    </Flex>
  )
}
