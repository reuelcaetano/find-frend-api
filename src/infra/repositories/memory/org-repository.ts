import { Org } from "../../../domain/entities/org";
import { OrgRepository } from "../../../domain/repositories/org-repository";

export class OrgRepositoryMemory implements OrgRepository {
  orgs: Org[] = []
  
  async findById(id: string): Promise<Org | null> {
    const org = this.orgs.find((org) => org.id === id)
    if (!org) { return null }
    return org
  }

  async findByUser(user: string) {
    const org = this.orgs.find(org => org.user === user)
    if (!org) {
      return null
    }
    return org
  }
  
  async create(data: Org) {
    this.orgs.push(data)
  }
}