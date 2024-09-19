import { beforeEach, describe, expect, it } from 'vitest'
import { OrgCreate } from './org-create'
import { OrgRepositoryMemory } from '../../infra/repositories/memory/org-repository'
import { makeOrg } from '../../tests/factories/make-org'
import { Login } from './login'
import { OrgNotFoundError } from './errors/org-not-found-error'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'
import { Org } from '../entities/org'

describe('Login', () => {
  beforeEach(() => {
  })

  it('should be able to create a org', async () => {
    const orgRepository = new OrgRepositoryMemory()
    const orgCreate = new OrgCreate(orgRepository)
    const login = new Login(orgRepository)
    orgCreate.execute(makeOrg())

    const result = await login.execute({ user: 'joe', pass:'123' })

    expect(result).toBeInstanceOf(Org)
  })

  it('should not be able to org not found', async () => {
    const orgRepository = new OrgRepositoryMemory()
    const orgCreate = new OrgCreate(orgRepository)
    const login = new Login(orgRepository)
    orgCreate.execute(makeOrg())

    await expect(() => 
      login.execute({user: 'user-not-existent', pass:'123'})
    ).rejects.toBeInstanceOf(OrgNotFoundError)
  })

  it('should not be able to invalid credentials', async () => {
    const orgRepository = new OrgRepositoryMemory()
    const orgCreate = new OrgCreate(orgRepository)
    const login = new Login(orgRepository)
    await orgCreate.execute(makeOrg())

    await expect(() => 
      login.execute({ user: 'joe', pass:'pass-invalid' })
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})