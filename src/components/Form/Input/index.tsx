import {
  InputProps as ChakraInputProps,
  Input as ChakraInput,
  FormLabel,
  FormControl,
  Flex
} from '@chakra-ui/react'
import { Icon } from 'components'
import { IconNames } from 'utils/icon-utils'

export type InputProps = ChakraInputProps & {
  label?: string
  disabled?: boolean
  iconName?: IconNames
  iconPosition?: 'left' | 'right'
}

export const Input = ({
  label,
  name,
  iconName,
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
