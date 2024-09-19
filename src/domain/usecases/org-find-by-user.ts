import { Org, OrgProps } from "../entities/org";
import { OrgRepository } from "../repositories/org-repository";

export class OrgFindByUser {
  constructor(private orgRepository: OrgRepository) {}

  async execute(user: string) {
    const org = await this.orgRepository.findByUser(user)
    return org
  }
}