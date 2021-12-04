import Link from 'next/link'
import {
  Container,
  Heading,
  Text,
  Divider,
  Box,
  Button,
  Flex
} from '@chakra-ui/react'
import { Logo } from 'components/Header/Logo'

export default function NotFound() {
  return (
    <Box>
      <Flex
        as="header"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        h="20"
        maxWidth={1480}
        mx="auto"
        mt="4"
        px="6"
      >
        <Logo />
      </Flex>

      <Container as="main" width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Heading>Não encontrado</Heading>

        <Text>A página que você está procurando não foi encontrada.</Text>

        <Divider my={6} />

        <Box my={6} align="center">
          <Link href="/dashboard" passHref>
            <Button size="sm" fontSize="sm" cursor="pointer" colorScheme="pink">
              Retornar para o dashboard
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  )
}
