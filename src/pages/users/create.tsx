import Head from 'next/head'
import Link from 'next/link'
import {
  Box,
  Divider,
  VStack,
  HStack,
  SimpleGrid,
  Flex
} from '@chakra-ui/react'

import { Header, Input, Button, Heading, Card } from 'components'
import { AppTemplate } from 'templates/AppTemplate'

export default function CreateUser() {
  return (
    <Box as="main">
      <Head>
        <title>dashgo - Criação de usuários</title>
      </Head>

      <Header
        avatar_url="https://github.com/r3nanp.png"
        email="renanmol87@gmail.com"
        name="Renan Pereira"
      />

      <AppTemplate>
        <Card flex="1">
          <Heading title="Criar usuário" />
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <Input name="name" label="Nome Completo" iconName="person" />
              <Input
                name="email"
                label="E-mail"
                type="email"
                iconName="email"
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <Input
                type="password"
                name="password"
                label="Senha"
                iconName="lock"
              />
              <Input
                name="password-confirmation"
                label="Confirmação da senha"
                type="password"
                iconName="lock"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justifyContent="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button
                  as="a"
                  whileHover={{ scale: 1.1 }}
                  colorScheme="whiteAlpha"
                >
                  Cancelar
                </Button>
              </Link>
              <Button whileHover={{ scale: 1.1 }} colorScheme="pink">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Card>
      </AppTemplate>
    </Box>
  )
}
