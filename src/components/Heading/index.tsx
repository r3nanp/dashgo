import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps
} from '@chakra-ui/react'

type HeadingProps = ChakraHeadingProps & {
  title: string
}

export const Heading = ({ title, ...rest }: HeadingProps) => {
  return (
    <ChakraHeading {...rest} size="lg" fontWeight="normal">
      {title}
    </ChakraHeading>
  )
}
