import fastifyJwt from '@fastify/jwt'
import { orgRoutes } from './infra/http/controllers/org/org.routes'
import { petRoutes } from './infra/http/controllers/pet/pet.routes'
import fastify from 'fastify'

export const app = fastify()

app.register(fastifyJwt, {
  secret: process.env.JWT_SECRET || 'secret',
  sign: {
    expiresIn: '7d'
  }
})

app.register(orgRoutes)
app.register(petRoutes)