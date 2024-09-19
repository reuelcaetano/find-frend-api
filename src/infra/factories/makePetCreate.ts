import { PetCreate } from "../../domain/usecases/pet-create"
import { OrgRepositoryPrisma } from "../repositories/prisma/org-repository"
import { PetRepositoryPrisma } from "../repositories/prisma/pet-repository"

export function makePetCreate() {
  const petRepository = new PetRepositoryPrisma()
  const orgRepository = new OrgRepositoryPrisma()
  const petCreate = new PetCreate(petRepository, orgRepository)
  return petCreate
}