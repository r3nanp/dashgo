import { ReactNode } from 'react'
import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps
} from '@chakra-ui/react'

type HeadingProps = ChakraHeadingProps & {
  title: string
  rightComponent?: ReactNode
}

export const Heading = ({ title, rightComponent, ...rest }: HeadingProps) => {
  return (
    <ChakraHeading {...rest} size="lg" fontWeight="normal">
      {title}
      {rightComponent}
    </ChakraHeading>
  )
}
