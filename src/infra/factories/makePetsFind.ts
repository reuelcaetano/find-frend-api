import { PetsFind } from "../../domain/usecases/pets-find"
import { PetRepositoryPrisma } from "../repositories/prisma/pet-repository"

export function makePetsFind() {
  const petRepository = new PetRepositoryPrisma()
  const petsFind = new PetsFind(petRepository)
  return petsFind
}