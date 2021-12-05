import { Stack, Box, Text } from '@chakra-ui/react'
import { PaginationButton } from './PaginationButton'

export type PaginationProps = {
  totalCount: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

const generatePagesArray = (from: number, to: number) => {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}

export const Pagination = ({
  totalCount,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) => {
  const lastPage = Math.floor(totalCount / registersPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : []

  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justifyContent="space-between"
      alignItems="center"
      spacing="6"
    >
      <Box>
        <strong>{currentPage}</strong> - <strong>{registersPerPage}</strong>
        &nbsp;de&nbsp;<strong>{lastPage}</strong>
      </Box>

      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationButton pageNumber={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map(prevPage => (
            <PaginationButton key={prevPage} pageNumber={prevPage} />
          ))}

        <PaginationButton pageNumber={currentPage} isActive />

        {nextPages.length > 0 &&
          nextPages.map(prevPage => (
            <PaginationButton key={prevPage} pageNumber={prevPage} />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationButton pageNumber={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}
