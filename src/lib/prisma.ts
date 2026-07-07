import { withAccelerate } from '@prisma/extension-accelerate'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const prismaClientPath = fileURLToPath(new URL('../../src/generated/prisma/client/index.js', import.meta.url))
const { PrismaClient } = require(prismaClientPath) as typeof import('../generated/prisma/client')

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  throw new Error('DATABASE_URL environment variable is required')
}

export const prisma = new PrismaClient({
  accelerateUrl: databaseUrl
}).$extends(withAccelerate())
