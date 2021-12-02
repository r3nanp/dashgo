import Head from 'next/head'
import { Flex } from '@chakra-ui/react'

import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Head>
        <title>Dashboard</title>
      </Head>

      <Header
        avatar_url="https://github.com/r3nanp.png"
        email="renanmol87@gmail.com"
        name="Renan Pereira"
      />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
      </Flex>
    </Flex>
  )
}
