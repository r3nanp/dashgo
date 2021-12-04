import { Link, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react'

import { Icon } from 'components'
import { IconNames } from 'utils/icon-utils'

type NavLinkProps = ChakraLinkProps & {
  link: string
  iconName: IconNames
}

export const NavLink = ({ link, iconName, ...rest }: NavLinkProps) => {
  return (
    <Link {...rest} display="flex" alignItems="center">
      <Icon iconName={iconName} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {link}
      </Text>
    </Link>
  )
}
