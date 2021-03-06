import { Flex, SimpleGrid, Text } from '@chakra-ui/react'

import { Card, Chart, Head, Header } from 'components'
import { AppTemplate } from 'templates/AppTemplate'

const series = [{ name: 'first-series', data: [31, 120, 321, 10, 28, 109, 18] }]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Head title="dashgo." />

      <Header
        avatar_url="https://github.com/r3nanp.png"
        email="renanmol87@gmail.com"
        name="Renan Pereira"
      />

      <AppTemplate>
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Card pb={4}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
              <Chart type="area" series={series} height={360} />
            </Text>
          </Card>

          <Card>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart type="area" series={series} height={360} />
          </Card>
        </SimpleGrid>
      </AppTemplate>
    </Flex>
  )
}
