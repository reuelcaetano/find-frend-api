import { Org } from "../entities/org";

export interface OrgRepository {
  create(data: Org): Promise<void>
  findByUser(user: string): Promise<Org | null>
  findById(id: string): Promise<Org | null>
}