import { FastifyReply, FastifyRequest } from "fastify"
import { makeOrgFindByUser } from "../../../factories/makeOrgFindByUser"
import { z } from "zod"

export async function orgFindByUser(req: FastifyRequest, res: FastifyReply) {
  const paramsSchema = z.object({
    user: z.string()
  })
  const params = paramsSchema.parse(req.params)
  const { user } = params

  const orgFindByUser = makeOrgFindByUser()

  const org = await orgFindByUser.execute(user)

  res.send(org)
}
