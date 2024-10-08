import { beforeEach, describe, expect, it } from 'vitest'
import { PetRepositoryMemory } from '../../infra/repositories/memory/pet-repository'
import { PetsFind } from './pets-find'
import { Pet } from '../entities/pet'
import { makePet } from '../../tests/factories/make-pet'

describe('Pet Find', () => {
  beforeEach(() => {
  })

  it('should be able to find a pets from city', async () => {
    const petRepository = new PetRepositoryMemory()
    const sut = new PetsFind(petRepository)
    petRepository.create(new Pet(makePet()))
    
    const result = await sut.execute({ city:'ab' })

    expect(result).toHaveLength(1)
  })
})