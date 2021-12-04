import { HStack } from '@chakra-ui/react'
import { Icon } from 'components'

export const NotificationsNav = () => {
  return (
    <HStack
      spacing="8"
      pr="8"
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
      mx="8"
    >
      <Icon iconName="notification" fontSize="20" />
      <Icon iconName="userAdd" fontSize="20" />
    </HStack>
  )
}
