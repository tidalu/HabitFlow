import 'dotenv/config'
import { defineConfig } from 'prisma/config'

export default defineConfig({
  datasource: {
    url: process.env.DIRECT_URL
  },
  migrations: {
    path: 'prisma/migrations'
  },
  schema: 'prisma/schema.prisma'
})
