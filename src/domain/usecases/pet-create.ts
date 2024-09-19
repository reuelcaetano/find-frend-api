import { Pet } from "../entities/pet";
import { OrgRepository } from "../repositories/org-repository";
import { PetRepository } from "../repositories/pet-repository";
import { OrgNotFoundError } from "./errors/org-not-found-error";

interface PetCreateRequest {
  id: string
  orgId: string
  age: number
  name: string
  adoption: boolean,
  weightInGrams: number
}

export class PetCreate {
  constructor(private petRepository: PetRepository, private orgRepository: OrgRepository) {}

  async execute(data: PetCreateRequest) {
    const org = await this.orgRepository.findById(data.orgId)
    if (!org) { throw new OrgNotFoundError() }

    const pet = new Pet(data)
    await this.petRepository.create(pet)
  }
}