import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { ENV } from './env.js'
import { tiktokController } from './controller/tiktok-controller.js'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/', tiktokController)

const port: number | undefined = ENV.PORT ? Number(ENV.PORT) : undefined

serve({
  fetch: app.fetch,
  port: port
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
