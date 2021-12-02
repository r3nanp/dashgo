import { Input, Flex, Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'
import { SearchIcon } from '@chakra-ui/icons'

export const Header = () => {
  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      h="20"
      maxWidth={1480}
      mx="auto"
      mt="4"
      px="6"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>

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

        <SearchIcon />
      </Flex>

      <Flex alignItems="center" ml="auto">
        <HStack
          spacing="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
          mx="8"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex alignItems="center">
          <Box>
            <Text mr="4" textAlign="left">
              Renan Pereira
            </Text>
            <Text color="gray.300" fontSize="small">
              renanmol87@gmail.com
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Renan Pereira"
            src="https://github.com/r3nanp.png"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
