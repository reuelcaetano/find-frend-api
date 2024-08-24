import { Pet, PetProps } from "../entities/pet";
import { PetRepository } from "../repositories/pet-repository";

export class PetCreate {
  constructor(private petRepository: PetRepository) {}

  execute(data: PetProps) {
    const pet = new Pet(data)
    this.petRepository.create(pet)
    return pet
  }
}