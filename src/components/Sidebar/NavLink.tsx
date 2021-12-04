import Link from 'next/link'
import {
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react'

import { ActiveLink, Icon } from 'components'
import { IconNames } from 'utils/icon-utils'

type NavLinkProps = ChakraLinkProps & {
  link: string
  iconName: IconNames
  href: string
}

export const NavLink = ({ link, iconName, href, ...rest }: NavLinkProps) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink {...rest} display="flex" alignItems="center">
        <Icon iconName={iconName} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {link}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
