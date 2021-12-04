import { Button, ButtonProps } from 'components'

type PaginationButton = Omit<ButtonProps, 'children'> & {
  pageNumber: number
  isActive?: boolean
}

export const PaginationButton = ({
  pageNumber,
  isActive = false,
  ...rest
}: PaginationButton) => {
  if (isActive) {
    return (
      <Button
        {...rest}
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default'
        }}
        _hover={{ bg: 'gray.500' }}
      >
        {pageNumber}
      </Button>
    )
  }

  return (
    <Button
      {...rest}
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="gray.200"
      _hover={{ bg: 'gray.500' }}
    >
      {pageNumber}
    </Button>
  )
}
