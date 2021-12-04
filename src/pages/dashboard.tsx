import Head from 'next/head'
import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react'

import { Chart, Header } from 'components'
import { AppTemplate } from 'templates/AppTemplate'

const series = [{ name: 'first-series', data: [31, 120, 321, 10, 28, 109, 18] }]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Head>
        <title>dashgo.</title>
      </Head>

      <Header
        avatar_url="https://github.com/r3nanp.png"
        email="renanmol87@gmail.com"
        name="Renan Pereira"
      />

      <AppTemplate>
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8} pb={4}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
              <Chart type="area" series={series} height={360} />
            </Text>
          </Box>

          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart type="area" series={series} height={360} />
          </Box>
        </SimpleGrid>
      </AppTemplate>
    </Flex>
  )
}
