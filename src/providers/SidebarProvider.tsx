import { createContext, useEffect, ReactNode } from 'react'
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'

type SidebarDrawerContextData = {
  disclosure: UseDisclosureReturn
}

type SidebarDrawerProps = {
  children: ReactNode
}

export const SidebarDrawerContext = createContext(
  {} as SidebarDrawerContextData
)

export const SidebarDrawerProvider = ({ children }: SidebarDrawerProps) => {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
    /** Disclosure should not be a dependency list */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={{ disclosure }}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}
