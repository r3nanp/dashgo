import {
  IconButton as IconButtonChakra,
  IconButtonProps as ChakraIconButtonProps
} from '@chakra-ui/react'

import { Icon } from 'components'
import { IconNames } from 'utils/icon-utils'

export type IconButtonProps = ChakraIconButtonProps & {
  iconName: IconNames
  iconSize?: string | number
}

export const IconButton = ({
  iconName,
  iconSize = 20,
  ...rest
}: IconButtonProps) => {
  return (
    <IconButtonChakra
      {...rest}
      icon={<Icon iconName={iconName} fontSize={iconSize} />}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      whiteSpace="nowrap"
      bg="transparent"
      fontSize="20"
    />
  )
}
