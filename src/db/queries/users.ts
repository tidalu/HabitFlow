import { query } from '#db/index.js'

export const createUser = async (name: string, email: string, password: string) => {
  return query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, password])
}

export const getUserById = async (id: number) => {
  return query('SELECT * FROM users WHERE id = $1', [id])
}
