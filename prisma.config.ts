import 'dotenv/config'
import { defineConfig } from 'prisma/config'

const url = process.env.DATABASE_URL ?? 'postgresql://placeholder'

if (!url) {
  throw new Error('DATABASE_URL must be set in .env')
}

export default defineConfig({
  datasource: {
    url,
    shadowDatabaseUrl: process.env.SHADOW_DATABASE_URL
  },
  migrations: {
    path: 'prisma/migrations'
  },
  schema: 'prisma/schema.prisma'
})
