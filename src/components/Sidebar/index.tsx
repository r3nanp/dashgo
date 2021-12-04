import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  useBreakpointValue
} from '@chakra-ui/react'
import { useSidebarDrawer } from 'hooks/useSidebarDrawer'
import { SidebarNav } from './SidebarNav'

export const Sidebar = () => {
  const { disclosure } = useSidebarDrawer()
  const { isOpen, onClose } = disclosure

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSidebar)
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )

  return (
    <Box as="aside" width="64" mr="8">
      <SidebarNav />
    </Box>
  )
}
