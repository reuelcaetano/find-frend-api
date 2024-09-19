import { Pet } from "../../../domain/entities/pet";
import { PetRepository } from "../../../domain/repositories/pet-repository";

export class PetRepositoryMemory implements PetRepository {
  pets: Pet[] = []

  async findById(id: string) {
    const pet = this.pets.find(pet => pet.id === id)
    if (!pet) {
      return null
    }
    return pet
  }
  
  async create(data: Pet) {
    this.pets.push(data)
  }

  async findMany(city: string, minWeight: number = 0, age: number = 0) {
    return this.pets
      .filter(pet => pet.weightInGrams >= minWeight)
      .filter(pet => pet.age === age)
      .filter(pet => pet.adoption)
  }
}