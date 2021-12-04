import { Stack, Button, Box } from '@chakra-ui/react'

type PaginationProps = {
  isActive: boolean
}

export const Pagination = ({ isActive }: PaginationProps) => {
  return (
    <Stack
      direction="row"
      mt="8"
      justifyContent="space-between"
      alignItems="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme={isActive ? 'pink' : 'gray.700'}
          disabled={isActive}
          _disabled={{
            bg: 'pink.500',
            cursor: 'default'
          }}
          _hover={{ bg: !isActive && 'gray.500' }}
        >
          1
        </Button>
      </Stack>
    </Stack>
  )
}
