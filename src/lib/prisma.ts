import { withAccelerate } from '@prisma/extension-accelerate'

import { PrismaClient } from '../../generated/prisma/client' // your output path

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  throw new Error('DATABASE_URL environment variable is required')
}

export const prisma = new PrismaClient({
  accelerateUrl: databaseUrl
}).$extends(withAccelerate())
