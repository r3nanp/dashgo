import {
  Icon as IconChakra,
  IconProps as ChakraIconProps
} from '@chakra-ui/react'
import { IconNames, iconUtils } from 'utils/icon-utils'

export type IconProps = ChakraIconProps & {
  iconName: IconNames
}

export const Icon = ({ iconName, ...rest }: IconProps) => {
  return (
    <IconChakra
      {...rest}
      as={iconUtils(iconName)}
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
