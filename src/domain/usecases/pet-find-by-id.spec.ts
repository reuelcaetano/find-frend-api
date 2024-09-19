import { beforeEach, describe, expect, it } from 'vitest'
import { PetRepositoryMemory } from '../../infra/repositories/memory/pet-repository'
import { PetFindById } from './pet-find-by-id'
import { Pet } from '../entities/pet'
import { makePet } from '../../tests/factories/make-pet'

describe('Pet Find by Id', () => {
  beforeEach(() => {
  })

  it('should be able to find a pet by id', async () => {
    const petRepository = new PetRepositoryMemory()
    const sut = new PetFindById(petRepository)
    petRepository.create(new Pet(makePet()))
    
    const result = sut.execute('1')

    expect((await result)).toBeInstanceOf(Pet)
  })
})