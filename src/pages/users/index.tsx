import Link from 'next/link'
import {
  Box,
  Checkbox,
  Flex,
  Button,
  Table,
  Thead,
  Text,
  Tbody,
  Th,
  Tr,
  Td,
  Spinner,
  useBreakpointValue
} from '@chakra-ui/react'

import { useUsers } from 'features/users/apis/getUsers'
import { Header, Heading, Icon, Head, Pagination } from 'components'
import { AppTemplate } from 'templates/AppTemplate'
import { dateFormatter } from 'utils/date-utils'

export default function UsersList() {
  const { data, isLoading, isFetching, error, refetch } = useUsers()

  const isWide = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box as="main">
      <Head title="dashgo - Listagem de usuários" />

      <Header
        avatar_url="https://github.com/r3nanp.png"
        email="renanmol87@gmail.com"
        name="Renan Pereira"
      />

      <AppTemplate>
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" alignItems="center">
            <Heading
              title="Usuários"
              rightComponent={
                !isLoading &&
                isFetching && <Spinner color="gray.500" size="sm" ml="4" />
              }
            />

            <Box>
              {isWide && (
                <Button
                  size="sm"
                  fontSize="sm"
                  colorScheme="pink"
                  cursor="pointer"
                  leftIcon={<Icon iconName="loading" fontSize="20" />}
                  onClick={() => refetch()}
                  mr={4}
                >
                  Atualizar
                </Button>
              )}

              <Link href="/users/create" passHref>
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
              </Link>
            </Box>
          </Flex>
          {isLoading ? (
            <Flex justifyContent="center">
              <Spinner aria-label="loading" />
            </Flex>
          ) : error ? (
            <Flex justifyContent="center">
              <Text>Falha a obter os dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table aria-label="users" colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color="gray.600" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>

                    <Th>Usuário</Th>

                    {isWide && <Th>Data de cadastro</Th>}
                    <Th width="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.users.map(user => {
                    return (
                      <Tr key={user.id}>
                        <Td px={['4', '4', '6']}>
                          <Checkbox colorScheme="pink" />
                        </Td>

                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>

                        {isWide && <Td>{dateFormatter(user.createdAt)}</Td>}

                        <Td>
                          {isWide && (
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
                          )}
                        </Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>

              <Pagination isActive />
            </>
          )}
        </Box>
      </AppTemplate>
    </Box>
  )
}
