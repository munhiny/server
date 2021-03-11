import { pathToFileURL } from 'url'
import { pool } from './index'

export const getAllEmployees = (request:any, response:any) => {
    pool.query("SELECT e.emp_fname, e.emp_lname, j.job_description, j.job_chg_hour FROM employee e JOIN job j ON e.job_code = j.job_code;")
    .then((results:any) => response.status(200).json(results.rows))
    .catch((error:any) => {
        console.log('Error: ', error)
    })
}