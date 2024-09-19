import { FastifyReply, FastifyRequest } from "fastify"
import { randomUUID } from "node:crypto"
import { z } from "zod"
import { makePetCreate } from "../../../factories/makePetCreate"

export async function petCreate(req: FastifyRequest, res: FastifyReply) {
  const bodySchema = z.object({
    orgId: z.string(),
    name: z.string(),
    age: z.number(),
    adoption: z.boolean(),
    weightInGrams: z.number()
  })
  const { orgId, name, age, adoption, weightInGrams } = bodySchema.parse(req.body)

  const petCreate = makePetCreate()

  await petCreate.execute({
    id: randomUUID(),
    adoption,
    age,
    name,
    orgId, 
    weightInGrams
  })
}