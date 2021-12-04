import Head from 'next/head'
import { useRouter } from 'next/router'
import { Flex, Stack } from '@chakra-ui/react'

import { Input, Button } from 'components'

export default function SignIn() {
  const { push } = useRouter()

  return (
    <Flex
      as="main"
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Head>
        <title>dashgo - Login</title>
      </Head>

      <Flex
        as="form"
        flexDirection="column"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        padding={8}
        borderRadius={8}
      >
        <Stack spacing={4}>
          <Input label="E-mail" name="email" type="email" iconName="email" />

          <Input
            label="Senha"
            name="password"
            type="password"
            iconName="lock"
          />
        </Stack>

        <Button
          colorScheme="pink"
          type="submit"
          mt={6}
          size="lg"
          onClick={() => push('/dashboard')}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
