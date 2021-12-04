import { useContext } from 'react'
import { SidebarDrawerContext } from 'providers/SidebarProvider'

export const useSidebarDrawer = () => {
  const context = useContext(SidebarDrawerContext)

  if (!context)
    throw new Error('useSidebarDrawer must be used within SidebarDrawerContext')

  return context
}
