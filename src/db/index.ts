import { prisma } from '#lib/prisma.js'
// import * as z from 'zod'

// user create
export const createUser = async (data: { name: string; email: string; password: string }) => {
  // const dataTyped = z.object({ name: z.string(), email: z.string(), password: z.string() }).parse(data)
  // console.log(dataTyped, 'dataTyped')
  return prisma.user.create({ data })
}

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({ where: { email } })
}

export const userData = async () => {
  return await prisma.user.findMany({
    include: {
      habits: {
        include: {
          logs: {
            include: {
              User: {
                select: {
                  email: true
                }
              }
            }
          }
        }
      }
    }
  })
}

// ---- session create, find, delete
export const storeSession = async (data: { expires: Date; userId: string }) => {
  return prisma.sessions.create({ data })
}

export const sessionDelete = async (sessionId: number) => {
  return prisma.sessions.delete({ where: { session_id: sessionId } })
}

// habits
export const getHabitsForUser = async (userId: string) => {
  return prisma.habits.findMany({ where: { userId } })
}

export const getHabitForUser = async (id: number) => {
  return prisma.habits.findUnique({ where: { id } })
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

// habit logs

export const createLogForHabit = async (habitId: number, userId: string) => {
  return prisma.habit_logs.create({ data: { habitId, userId } })
}

export const getLogsForHabit = async (habitId: number) => {
  return prisma.habit_logs.findMany({ where: { habitId } })
}

export const getallHabitsLogs = async () => {
  return prisma.habit_logs.findMany({
    include: {
      User: {
        select: {
          email: true
        }
      }
    }
  })
}
export const getLastLogForHabit = async (habitId: number) => {
  return prisma.habit_logs.findFirst({
    where: { habitId },
    orderBy: {
      log_date: 'desc'
    }
  })
}
