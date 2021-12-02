import { ReactElement } from 'react'
import {
  InputProps as ChakraInputProps,
  Input as ChakraInput,
  FormLabel,
  FormControl,
  Flex,
  IconButton
} from '@chakra-ui/react'

export type InputProps = ChakraInputProps & {
  label?: string
  disabled?: boolean
  icon?: ReactElement
  iconPosition?: 'left' | 'right'
}

export const Input = ({
  label,
  name,
  icon,
  iconPosition = 'left',
  disabled = false,
  ...rest
}: InputProps) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Flex
        alignItems="center"
        bgColor="gray.900"
        borderRadius={4}
        _focusWithin={{ borderWidth: 2, borderColor: 'pink.500' }}
      >
        {!!icon && (
          <IconButton
            bg="transparent"
            aria-label={name}
            icon={icon}
            order={iconPosition === 'right' ? 1 : 0}
            _hover={{ bg: 'transparent', cursor: 'default' }}
            _active={{ bg: 'transparent' }}
            _focus={{ border: 'transparent' }}
          />
        )}

        <ChakraInput
          name={name}
          size="lg"
          variant="filled"
          border={0}
          bgColor="gray.900"
          disabled={disabled}
          _hover={{ bgColor: 'gray.900' }}
          {...(label ? { id: name } : {})}
          {...rest}
        />
      </Flex>
    </FormControl>
  )
}
