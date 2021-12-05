import { ReactNode } from 'react'
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Spinner
} from '@chakra-ui/react'
import { motion, MotionProps } from 'framer-motion'

type AnimatedButtonProps = ChakraButtonProps & MotionProps

export type ButtonProps = AnimatedButtonProps & {
  children: ReactNode
}

const MotionButton = motion<AnimatedButtonProps>(ChakraButton)

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <MotionButton {...rest}>{children}</MotionButton>
}
