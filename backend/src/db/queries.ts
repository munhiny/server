
import { pool } from './index'

const employeeQuery = "SELECT e.emp_fname, e.emp_lname, j.job_description, j.job_chg_hour FROM employee e JOIN job j ON e.job_code = j.job_code"

export const getAllEmployees = (request:any, response:any) => {
    // use pool to send query request
    pool.query(employeeQuery)
    // for result received, set response status to 200 and parse object
    // result is returned for every susccesful query
    .then((result:any) => response.status(200).json(result.rows))
    // catch error
    .catch((error:any) => {
        console.error(`Error: ${error}`);
        
    })
}