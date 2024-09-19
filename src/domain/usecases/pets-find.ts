import { PetRepository } from "../repositories/pet-repository";

interface PetsFindRequest {
  city: string
  minWeight?: number
  age?: number
}

export class PetsFind {
  constructor(private petRepository: PetRepository) {}

  async execute({ city, minWeight, age }: PetsFindRequest) {
    const pets = await this.petRepository.findMany(city, minWeight, age)
    return pets
  }
}