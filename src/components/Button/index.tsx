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
  isLoading?: boolean
}

const MotionButton = motion<AnimatedButtonProps>(ChakraButton)

export const Button = ({
  children,
  isLoading = false,
  ...rest
}: ButtonProps) => {
  return (
    <MotionButton {...rest}>
      {isLoading ? <Spinner size="md" color="whiteAlpha.700" /> : children}
    </MotionButton>
  )
}
