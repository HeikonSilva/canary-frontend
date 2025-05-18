import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import {
  validatorCompiler,
  serializerCompiler,
} from 'fastify-type-provider-zod'
import { routes } from './routes'

const server = fastify()

server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)

server.register(fastifyCors, { origin: '*' })

server.register(routes)

server.listen({ port: 8080 }).then(() => {
  console.log('HTTP server is running on port 8080')
})
