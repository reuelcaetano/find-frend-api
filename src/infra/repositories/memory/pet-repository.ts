import { Pet } from "../../../domain/entities/pet";
import { PetRepository } from "../../../domain/repositories/pet-repository";

export class PetRepositoryMemory implements PetRepository {
  private pets: Pet[] = []
  
  async create(data: Pet) {
    this.pets.push(data)
    return data
  }

  async findMany(city: string) {
    return this.pets.filter(pet => pet.city === city && pet.adoption)
  }

}