import { Pet } from "../../../domain/entities/pet";
import { PetRepository } from "../../../domain/repositories/pet-repository";
import { prisma } from "../../../lib/prisma";

export class PetRepositoryPrisma implements PetRepository {
  async create(data: Pet) {
    await prisma.pet.create({
      data: {
        id: data.id,
        adoption: data.adoption,
        age: data.age,
        name: data.name,
        weightInGrams: data.weightInGrams,
        orgId: data.orgId
      }
    })
  }
  async findById(id: string) {
    const pet = await prisma.pet.findUnique({
      where: {
        id
      }
    })
    if (!pet) { return null }
    return new Pet(pet)
  }
  async findMany(city: string, minWeight?: number, age?: number) {
    const pets = await prisma.pet.findMany({
      where: {
        Org: {
          city
        },
        adoption: true,
        weightInGrams: minWeight,
        age
      }
    })
    return pets.map((pet) => new Pet(pet))
  }
}
