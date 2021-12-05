import { api } from 'lib/axios'
import { QueryConfig } from 'lib/react-query'
import { useQuery } from 'react-query'

import { UserData } from '../types/user'

export const getUsers = (): Promise<UserData> => {
  return api.get('/users')
}

type UseUsersOptions = {
  config?: QueryConfig<typeof getUsers>
}

export const useUsers = ({ config }: UseUsersOptions = {}) => {
  return useQuery({
    ...config,
    queryKey: ['users'],
    queryFn: () => getUsers(),
    staleTime: 1000 * 5
  })
}
