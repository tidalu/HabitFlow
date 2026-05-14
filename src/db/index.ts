import { prisma } from '#lib/prisma.js'

// user create
export const createUser = async (data: { name: string; email: string; password: string }) => {
  return prisma.user.create({ data })
}

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({ where: { email } })
}

// ---- session create, find, delete
export const storeSession = async (data: { expires: Date; userId: string }) => {
  return prisma.sessions.create({ data })
}

export const sessionDelete = async (sessionId: number) => {
  return prisma.sessions.delete({ where: { session_id: sessionId } })
}
