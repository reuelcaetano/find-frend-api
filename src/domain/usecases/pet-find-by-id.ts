import { PetRepository } from "../repositories/pet-repository";

export class PetFindById {
  constructor(private petRepository: PetRepository) {}

  async execute(id: string) {
    const pet = await this.petRepository.findById(id)
    return pet
  }
}