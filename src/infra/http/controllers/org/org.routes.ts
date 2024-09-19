import { FastifyInstance } from "fastify";
import { login } from "./login";
import { orgCreate } from "./org-create";
import { orgFindByUser } from "./org-find-by-user";

export async function orgRoutes(app: FastifyInstance) {
  app.post('/login', login)
  app.get('/orgs/:user', orgFindByUser)
  app.post('/orgs', orgCreate)
}