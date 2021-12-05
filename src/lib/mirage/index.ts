import { createServer, Model, Factory } from 'miragejs'
import faker from 'faker'

type UserModel = {
  id: string
  name: string
  email: string
  created_at: string
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<UserModel>>({})
    },

    factories: {
      user: Factory.extend({
        id() {
          return faker.datatype.uuid()
        },

        name(index) {
          return `User ${index + 1}`
        },

        email() {
          return faker.internet.email().toLowerCase()
        },

        createdAt() {
          return faker.date.recent(10)
        }
      })
    },

    seeds(server) {
      server.createList('user', 200)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/users')
      this.get('/users/:id')
      this.post('/users')

      this.namespace = ''
      this.passthrough()
    }
  })

  return server
}
