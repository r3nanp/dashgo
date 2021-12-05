import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

export const createUserSchema = Yup.object().shape({
  name: Yup.string().trim().required('O nome é obrigatório.'),

  email: Yup.string()
    .trim()
    .email('O campo precisa ser um e-mail válido.')
    .required('O email é obrigatório.'),

  password: Yup.string()
    .min(5, 'A senha precisa ter no mínimo, 5 caracteres')
    .required('A senha é obrigatória.'),

  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas não são iguais.')
    .required('A confirmação de senha é obrigatória.')
})

export const createUserResolver = yupResolver(createUserSchema)
