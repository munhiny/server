import { Pool } from 'pg'
import * as pgTypes from 'pg-types'
import moment from 'moment'


export const pool = new Pool({
    user: "awesome5",
    host: "localhost",
    database: "companyx",
    password: "",
    port: 5432,
})

const parseDate = (val:string )=> {
    return val === null ? null : moment(val).format('YYYY-MM-DD')
}


// parse parse numeric values as numeric and not as string
pgTypes.setTypeParser(1700, value => parseFloat(value) )
pgTypes.setTypeParser(1082, value => {
    return value === null? null : parseDate(value)
})

