import { FastifyReply, FastifyRequest } from "fastify"

export function pet(req: FastifyRequest, res: FastifyReply) {
  return res.send('hello')
}