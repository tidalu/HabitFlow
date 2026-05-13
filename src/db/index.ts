import { prisma } from '#lib/prisma.js'

// user create
export const createUser = async (data: { name: string; email: string; password: string }) => {
  return prisma.user.create({ data })
}
