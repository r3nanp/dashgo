import axios from 'axios'
import { BASE_URL } from 'config'

export const api = axios.create({
  baseURL: BASE_URL || 'http://localhost:3000/api'
})

api.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)
