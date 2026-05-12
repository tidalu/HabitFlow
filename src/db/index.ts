import { pool } from '#db/pool.js'

export const query = (text: string, params?: any[]) => pool.query(text, params)
