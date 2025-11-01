import fastify from 'fastify'
import { knex } from './database.js'
import { env } from './env/index.js'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await knex('transactions').select('*')

  return transaction
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('http server running')
  })
