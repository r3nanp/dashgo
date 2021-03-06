import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  Box,
  Divider,
  VStack,
  HStack,
  SimpleGrid,
  Flex
} from '@chakra-ui/react'

import { createUserResolver } from 'helpers/createUser'
import { AppTemplate } from 'templates/AppTemplate'
import { Header, Input, Button, Heading, Head, Card } from 'components'

type CreateUserData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export default function CreateUser() {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset
  } = useForm<CreateUserData>({ resolver: createUserResolver })

  const handleCreateUser: SubmitHandler<CreateUserData> = async data => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(data)
    reset()
  }

  const onSubmit = handleSubmit(data => handleCreateUser(data))

  return (
    <Box as="main">
      <Head title="dashgo. - Criação de usuários" />

      <Header
        avatar_url="https://github.com/r3nanp.png"
        email="renanmol87@gmail.com"
        name="Renan Pereira"
      />

      <AppTemplate>
        <Card flex="1" as="form" onSubmit={onSubmit}>
          <Heading title="Criar usuário" />
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <Input
                name="name"
                label="Nome Completo"
                iconName="person"
                error={errors.name}
                {...register('name')}
              />
              <Input
                name="email"
                label="E-mail"
                type="email"
                iconName="email"
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <Input
                type="password"
                name="password"
                label="Senha"
                iconName="lock"
                error={errors.password}
                {...register('password')}
              />
              <Input
                name="password_confirmation"
                label="Confirmação da senha"
                type="password"
                iconName="lock"
                error={errors.password_confirmation}
                {...register('password_confirmation')}
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
              <Button
                isLoading={isSubmitting}
                whileHover={{ scale: 1.1 }}
                colorScheme="pink"
                type="submit"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Card>
      </AppTemplate>
    </Box>
  )
}
