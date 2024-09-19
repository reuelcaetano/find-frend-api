import { FastifyReply, FastifyRequest } from "fastify"
import { InvalidCredentialsError } from "../../../../domain/usecases/errors/invalid-credentials-error"
import { makeLogin } from "../../../factories/makeLogin"
import { z } from "zod"

export async function login(req: FastifyRequest, res: FastifyReply) {
  const bodySchema = z.object({
    user: z.string(),
    pass: z.string()
  })
  const { user, pass } = bodySchema.parse(req.body)

  const login = makeLogin()

  try {
    const org = await login.execute({user, pass})
    const token = await res.jwtSign(
      {},
      {
        sign: {
          sub: org.id
        }
      }
    )
    res.code(200).send({ token })
  } catch (e) {
    if (e instanceof InvalidCredentialsError) {
      res.code(401).send({error: e.message})
    }
  }  
}