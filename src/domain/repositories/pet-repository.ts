import { Pet } from "../entities/pet";

export interface PetRepository {
  create(data: Pet): Promise<void>
  findById(id: string): Promise<Pet | null>
  findMany(city: string, minWeight?: number, age?: number): Promise<Pet[]>
}