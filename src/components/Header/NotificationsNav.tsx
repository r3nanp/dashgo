import { HStack } from '@chakra-ui/react'
import { Icon } from 'components'

export const NotificationsNav = () => {
  return (
    <HStack
      spacing={['6', '8']}
      pr={['6', '8']}
      mx={['6', '8']}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon iconName="notification" fontSize="20" />
      <Icon iconName="userAdd" fontSize="20" />
    </HStack>
  )
}
