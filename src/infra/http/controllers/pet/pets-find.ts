import { FastifyReply, FastifyRequest } from "fastify"
import { makePetsFind } from "../../../factories/makePetsFind"
import { z } from "zod"

export async function petsFind(req: FastifyRequest, res: FastifyReply) {
  const querySchema = z.object({
    age: z.coerce.number().optional(),
    weight: z.coerce.number().optional()
  })
  const { age, weight: minWeight } = querySchema.parse(req.query)
  
  const paramsSchema = z.object({
    city: z.string()
  })
  const { city } = paramsSchema.parse(req.params)

  const petsFind = makePetsFind()
  
  const pets = await petsFind.execute({ city, minWeight, age })
  
  return res.send(pets)
}
