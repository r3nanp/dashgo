import Head from 'next/head'
import {
  Box,
  Checkbox,
  Flex,
  Heading,
  Button,
  Table,
  Thead,
  Text,
  Tbody,
  Th,
  Tr,
  Td
} from '@chakra-ui/react'
import { Header, Icon, Pagination } from 'components'
import { AppTemplate } from 'templates/AppTemplate'

export default function UsersList() {
  return (
    <Box as="main">
      <Head>
        <title>Listagem de usuários</title>
      </Head>

      <Header
        avatar_url="https://github.com/r3nanp.png"
        email="renanmol87@gmail.com"
        name="Renan Pereira"
      />

      <AppTemplate>
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              cursor="pointer"
              leftIcon={<Icon iconName="add" fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.600" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>

                <Th>Usuário</Th>

                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Renan</Text>
                    <Text fontSize="sm" color="gray.300">
                      renanmol87@gmail.com
                    </Text>
                  </Box>
                </Td>

                <Td>04 de abril de 2021</Td>

                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    cursor="pointer"
                    leftIcon={<Icon iconName="edit" fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination isActive />
        </Box>
      </AppTemplate>
    </Box>
  )
}
