import { ReactNode } from 'react'
import { BoxProps, Box } from '@chakra-ui/react'
import { motion, MotionProps } from 'framer-motion'

type AnimatedCardProps = Omit<BoxProps, 'transition'> & MotionProps

type CardProps = AnimatedCardProps & {
  children: ReactNode
}

const MotionCard = motion(Box)

export const Card = ({ children, ...rest }: CardProps) => {
  return (
    <MotionCard
      {...rest}
      p={['6', '8']}
      bg="gray.800"
      borderRadius={8}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      {children}
    </MotionCard>
  )
}
