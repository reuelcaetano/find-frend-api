import { FastifyInstance } from "fastify";
import { petsFind } from "./pets-find";
import { petCreate } from "./pet-create";

export async function petRoutes(app: FastifyInstance) {
  app.get('/pets/:city', petsFind)
  app.post('/pets', petCreate)
}