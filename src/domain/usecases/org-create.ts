import { Org, OrgProps } from "../entities/org";
import { OrgRepository } from "../repositories/org-repository";

export class OrgCreate {
  constructor(private orgRepository: OrgRepository) {}

  async execute(data: OrgProps) {
    const org = new Org(data)
    await this.orgRepository.create(org)
    return org
  }
}