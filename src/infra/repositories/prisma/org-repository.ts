import { Org } from "../../../domain/entities/org";
import { OrgRepository } from "../../../domain/repositories/org-repository";
import { prisma } from "../../../lib/prisma";

export class OrgRepositoryPrisma implements OrgRepository{
  async findById(id: string) {
    const org = await prisma.org.findUnique({
      where: {
        id
      }
    })

    if (!org) {return null}

    return new Org(org)
  }

  async create(data: Org) {
    await prisma.org.create({
      data: {
        id: data.id,
        user: data.user,
        pass: data.pass,
        street: data.street,
        whatsapp: data.whatsapp,
        city: data.city
      }
    })
  }
  async findByUser(user: string) {
    const org = await prisma.org.findUnique({
      where: {
        user
      }
    })
    if (!org) return null
    return new Org({
      id: org.id,
      user: org.user,
      pass: org.pass,
      street: org.street,
      whatsapp: org.whatsapp,
      city: org.city
    })
  }

}