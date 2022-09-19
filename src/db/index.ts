import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const pool = new Pool({
    // connectionString: process.env.uri,

    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    port: parseInt(process.env.PGPORT!),
    password: process.env.PASSWORD,

    // ssl: {
    //     rejectUnauthorized: false
    // }
})

export = {
    query: (text: string, params: any[]) => pool.query(text, params)
}