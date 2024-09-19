import { OrgRepository } from "../repositories/org-repository";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";
import { OrgNotFoundError } from "./errors/org-not-found-error";

export interface LoginRequest {
  user: string
  pass: string
}

export class Login {
  constructor(private orgRepository: OrgRepository) {}

  async execute({ user, pass }: LoginRequest) {
    const org = await this.orgRepository.findByUser(user)

    if (!org) { throw new OrgNotFoundError() }

    if (org.pass != pass) { throw new InvalidCredentialsError() }

    return org
  }
}