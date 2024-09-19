import { beforeEach, describe, expect, it } from 'vitest'
import { OrgCreate } from './org-create'
import { OrgRepositoryMemory } from '../../infra/repositories/memory/org-repository'
import { Org } from '../entities/org'
import { makeOrg } from '../../tests/factories/make-org'

describe('Org Create', () => {
  beforeEach(() => {
  })

  it('should be able to create a org', async () => {
    const orgRepository = new OrgRepositoryMemory()
    const sut = new OrgCreate(orgRepository)
    
    const result = await sut.execute(makeOrg())

    expect(result).toBeInstanceOf(Org)
  })
})