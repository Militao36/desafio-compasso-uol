import knex from 'knex'
import 'dotenv/config'

const test = process.env.NODE_ENV === 'test'

const database = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: test ? process.env.DB_NAME_TEST : process.env.DB_NAME
    }
})

export { database }
