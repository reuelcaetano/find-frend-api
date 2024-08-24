import { FastifyInstance } from "fastify";
import { pet } from "./controllers/pet";

export async function appRoutes(app: FastifyInstance) {
  app.get('/', pet)
}