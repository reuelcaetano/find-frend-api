import { Pet } from "../entities/pet";

export interface PetRepository {
  create(data: Pet): Promise<Pet>
  findMany(city: string): Promise<Pet[]>
}