import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

type ProfileProps = {
  avatar_url: string
  email: string
  name: string
}

export const Profile = ({ avatar_url, email, name }: ProfileProps) => {
  return (
    <Flex alignItems="center">
      <Box mr="4" textAlign="right">
        <Text>{name}</Text>
        <Text color="gray.300" fontSize="small">
          {email}
        </Text>
      </Box>

      <Avatar size="md" name="Renan Pereira" src={avatar_url} />
    </Flex>
  )
}
