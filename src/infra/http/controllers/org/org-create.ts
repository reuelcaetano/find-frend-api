import { FastifyReply, FastifyRequest } from "fastify"
import { randomUUID } from "node:crypto"
import { makeOrgCreate } from "../../../factories/makeOrgCreate"
import { z } from "zod"

export async function orgCreate(req: FastifyRequest, res: FastifyReply) {
  const bodySchema = z.object({
    user: z.string(),
    pass: z.string(),
    street: z.string(),
    whatsapp: z.string(),
    city: z.string()
  })
  const body = bodySchema.parse(req.body)
  const { user, pass, street, whatsapp, city } = body

  const orgCreate = makeOrgCreate()

  await orgCreate.execute({
    id: randomUUID(),
    user,
    pass,
    street,
    whatsapp,
    city
  })

  res.code(201).send()
}