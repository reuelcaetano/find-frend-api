import { beforeEach, describe, expect, it } from 'vitest'
import { PetRepositoryMemory } from '../../infra/repositories/memory/pet-repository'
import { PetsFind } from './pets-find'
import { Pet } from '../entities/pet'

describe('Pet Find', () => {
  beforeEach(() => {
  })

  it('should be able to find a pets from city', async () => {
    const petRepository = new PetRepositoryMemory()
    const sut = new PetsFind(petRepository)
    const pet = {
      id: '1',
      name: 'dog',
      adoption: true,
      city: 'sp',
      weightInGrams: 4000
    }
    petRepository.create(new Pet(pet))
    
    const result = sut.execute('sp')

    expect((await result).length).toEqual(1)
  })
})