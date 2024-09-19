import { OrgCreate } from "../../domain/usecases/org-create"
import { OrgRepositoryPrisma } from "../repositories/prisma/org-repository"

export function makeOrgCreate() {
  const orgRepository = new OrgRepositoryPrisma()
  const orgCreate = new OrgCreate(orgRepository)
  return orgCreate
}