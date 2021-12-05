import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'
import {
  InputProps as ChakraInputProps,
  Input as ChakraInput,
  FormLabel,
  FormControl,
  Flex,
  FormErrorMessage
} from '@chakra-ui/react'

import { Icon } from 'components'
import { IconNames } from 'utils/icon-utils'

export type InputProps = ChakraInputProps & {
  label?: string
  disabled?: boolean
  iconName?: IconNames
  error?: FieldError
  iconPosition?: 'left' | 'right'
}

export const InputComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (props, ref) => {
  const {
    label,
    name,
    error,
    iconName,
    iconPosition = 'left',
    disabled = false,
    ...rest
  } = props

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Flex
        alignItems="center"
        bgColor="gray.900"
        borderRadius={4}
        _focusWithin={{ borderWidth: 1, borderColor: 'pink.500' }}
      >
        {!!iconName && (
          <Icon
            aria-label={name}
            iconName={iconName}
            order={iconPosition === 'right' ? 1 : 0}
            m={2}
          />
        )}

        <ChakraInput
          ref={ref}
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
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputComponent)
