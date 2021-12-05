import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('O campo precisa ser um email válido.')
    .required('O email é obrigatório.'),

  password: Yup.string()
    .min(5, 'A senha precisa ter mais de 5 caracteres')
    .required('A senha é obrigatória.')
})

export const signInResolver = yupResolver(signInSchema)
