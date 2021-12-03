import { useRouter } from 'next/router'
import Head from 'next/head'
import { Button, Flex, Stack } from '@chakra-ui/react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons'

import { Input } from 'components/Form'

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
        <title>Sign in</title>
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
          <Input
            label="E-mail"
            name="email"
            type="email"
            icon={<EmailIcon />}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            icon={<LockIcon />}
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
