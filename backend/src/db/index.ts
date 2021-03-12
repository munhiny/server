import { Pool } from 'pg'
import * as pgTypes from 'pg-types'

export const pool = new Pool({
    user: "awesome5",
    host: "localhost",
    database: "companyx",
    password: "",
    port: 5432,
})

// parse parse numeric values as numeric and not as string
pgTypes.setTypeParser(1700, value => parseFloat(value) )
