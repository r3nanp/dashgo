import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Flex, Stack } from '@chakra-ui/react'

import { signInResolver } from 'helpers/signIn'
import { Input, Button, Head } from 'components'

type SignInFormData = {
  email: string
  password: string
}

export default function SignIn() {
  const { push } = useRouter()
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit
  } = useForm<SignInFormData>({ resolver: signInResolver })

  const handleSignIn: SubmitHandler<SignInFormData> = async data => {
    console.log(data)

    push('/dashboard')
  }

  const onSubmit = handleSubmit(data => handleSignIn(data))

  return (
    <Flex
      as="main"
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Head title="dashgo." />

      <Flex
        as="form"
        flexDirection="column"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        padding={8}
        borderRadius={8}
        onSubmit={onSubmit}
      >
        <Stack spacing={4}>
          <Input
            label="E-mail"
            name="email"
            type="email"
            iconName="email"
            error={errors?.email}
            {...register('email')}
          />

          <Input
            label="Senha"
            name="password"
            type="password"
            iconName="lock"
            error={errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          isLoading={isSubmitting}
          colorScheme="pink"
          type="submit"
          mt={6}
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
