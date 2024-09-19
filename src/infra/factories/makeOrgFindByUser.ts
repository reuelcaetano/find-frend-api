import { OrgFindByUser } from "../../domain/usecases/org-find-by-user"
import { OrgRepositoryPrisma } from "../repositories/prisma/org-repository"

export function makeOrgFindByUser() {
  const orgRepository = new OrgRepositoryPrisma()
  const orgFindByUser = new OrgFindByUser(orgRepository)
  return orgFindByUser
}