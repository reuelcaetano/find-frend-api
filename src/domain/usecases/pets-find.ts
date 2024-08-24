import { Pet, PetProps } from "../entities/pet";
import { PetRepository } from "../repositories/pet-repository";

export class PetsFind {
  constructor(private petRepository: PetRepository) {}

  execute(city: string) {
    const pets = this.petRepository.findMany(city)
    return pets
  }
}