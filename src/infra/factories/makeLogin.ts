import { Login } from "../../domain/usecases/login"
import { OrgRepositoryPrisma } from "../repositories/prisma/org-repository"

export function makeLogin() {
  const orgRepository = new OrgRepositoryPrisma()
  const login = new Login(orgRepository)
  return login
}