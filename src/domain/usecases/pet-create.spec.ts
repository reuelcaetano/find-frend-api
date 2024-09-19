import { beforeEach, describe, expect, it } from 'vitest'
import { PetRepositoryMemory } from '../../infra/repositories/memory/pet-repository'
import { OrgRepositoryMemory } from '../../infra/repositories/memory/org-repository'
import { PetRepository } from '../repositories/pet-repository'
import { OrgRepository } from '../repositories/org-repository'
import { makePet } from '../../tests/factories/make-pet'
import { makeOrg } from '../../tests/factories/make-org'
import { OrgNotFoundError } from './errors/org-not-found-error'
import { PetCreate } from './pet-create'
import { Org } from '../entities/org'

describe('Pet Create', () => {
  let petRepository: PetRepository
  let orgRepository: OrgRepository
  let sut: PetCreate

  beforeEach(() => {
    petRepository = new PetRepositoryMemory()
    orgRepository = new OrgRepositoryMemory()
    sut = new PetCreate(petRepository, orgRepository)
  })

  it('should be able to create a pet', async () => {
    orgRepository.create(new Org(makeOrg()))
    const org = await orgRepository.findByUser('joe')
    
    await sut.execute(makePet())

    expect(org).toBeTruthy() // TODO
  })

  it('should not be able to create a pet in org no existent', async () => {    
    await expect(() =>
      sut.execute(makePet())
    ).rejects.toBeInstanceOf(OrgNotFoundError)
  })
})