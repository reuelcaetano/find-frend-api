import { beforeEach, describe, expect, it } from 'vitest'
import { PetCreate } from './pet-create'
import { PetRepositoryMemory } from '../../infra/repositories/memory/pet-repository'
import { Pet } from '../entities/pet'

describe('Pet Create', () => {
  beforeEach(() => {
  })

  it('should be able to create a pet', async () => {
    const petRepository = new PetRepositoryMemory()
    const sut = new PetCreate(petRepository)
    const pet = {
      id: '1',
      name: 'dog',
      adoption: true,
      city: 'sp',
      weightInGrams: 4000
    }
    
    const result = sut.execute(pet)

    expect(result).toBeInstanceOf(Pet)
  })
})