import type { FastifyTypedInstance } from './types'

export async function routes(server: FastifyTypedInstance) {
  server.get(
    '/hello',
    {
      schema: {
        description: 'Hello world endpoint',
      },
    },
    () => {
      return 'hello world'
    }
  )
}
