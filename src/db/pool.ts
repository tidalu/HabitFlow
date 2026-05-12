import pkg from 'pg'
const { Pool } = pkg

export const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'kaliadmin',
  database: 'habitflow',
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})
