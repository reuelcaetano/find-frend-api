import { Org, OrgProps } from "../entities/org";
import { OrgRepository } from "../repositories/org-repository";

export class OrgFindById {
  constructor(private orgRepository: OrgRepository) {}

  async execute(id: string) {
    const org = await this.orgRepository.findById(id)
    return org
  }
}