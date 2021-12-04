import { Stack, Box } from '@chakra-ui/react'
import { PaginationButton } from './PaginationButton'

export type PaginationProps = {
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
        <PaginationButton pageNumber={1} isActive />
        <PaginationButton pageNumber={2} />
        <PaginationButton pageNumber={3} />
        <PaginationButton pageNumber={4} />
        <PaginationButton pageNumber={5} />
      </Stack>
    </Stack>
  )
}
