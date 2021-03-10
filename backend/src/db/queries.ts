import { pathToFileURL } from 'url'
import { pool } from './index'

export const getAllEmployees = (request:any, response:any) => {
    pool.query("SELECT emp_hiredate::varchar FROM employee")
    .then((results:any) => response.status(200).json(results.rows))
    .catch((error:any) => {
        console.log('Error: ', error)
    })
}