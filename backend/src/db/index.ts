import { Pool } from 'pg'

export const pool = new Pool({
    user: "awesome5",
    host: "localhost",
    database: "companyx",
    password: "",
    port: 5432,
})