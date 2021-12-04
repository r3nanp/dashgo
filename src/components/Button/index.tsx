import { ReactNode } from 'react'
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  forwardRef
} from '@chakra-ui/react'
import { isValidMotionProp, motion, MotionProps } from 'framer-motion'

type AnimatedButtonProps = ChakraButtonProps & MotionProps

export type ButtonProps = AnimatedButtonProps & {
  children: ReactNode
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  const MotionButton = motion<ButtonProps>(
    forwardRef((props, ref) => {
      const chakraProps = Object.fromEntries(
        // do not pass framer props to DOM element
        Object.entries(props).filter(([key]) => !isValidMotionProp(key))
      )
      return <ChakraButton ref={ref} {...chakraProps} />
    })
  )

  return <MotionButton {...rest}>{children}</MotionButton>
}
