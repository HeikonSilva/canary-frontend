import type { FastifyInstance } from 'fastify'

export async function routes(server: FastifyInstance) {
  server.get('/hello', {}, () => {
    return 'hello world'
  })
}
