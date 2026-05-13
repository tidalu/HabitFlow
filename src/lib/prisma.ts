import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../../generated/prisma/client.js'

const connectionString = process.env.DATABASE_URL || 'you did not set a DATABASE_URL env variable'

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export { prisma }
