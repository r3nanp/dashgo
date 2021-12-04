import { Flex, Input } from '@chakra-ui/react'
import { Icon } from 'components'

export const SearchBar = () => {
  return (
    <Flex
      as="label"
      flex={1}
      py="4"
      px="8"
      ml="8"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Search"
        _placeholder={{ color: 'gray.400' }}
      />

      <Icon iconName="search" fontSize="20" />
    </Flex>
  )
}
