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

export const getHabitsForUser = async (userId: string) => {
  return prisma.habits.findMany({ where: { userId } })
}

export const createHabitForUser = async (userId: string, name: string) => {
  return prisma.habits.create({ data: { userId, name } })
}

export const updateHabitForUser = async (id: number, userId: string, name: string) => {
  return prisma.habits.update({ where: { id, userId }, data: { name } })
}

export const deleteHabitForUser = async (id: number, userId: string) => {
  return prisma.habits.delete({ where: { id, userId } })
}
