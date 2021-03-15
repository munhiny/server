
import { pool } from './index'

const employeeQuery = "SELECT e.emp_fname, e.emp_lname, i.img, j.job_description, j.job_chg_hour FROM employee e JOIN job j ON e.job_code = j.job_code join img i on i.emp_num = e.emp_num"
const projectQuery = "select e.emp_fname, e.emp_lname, j.job_description, p.proj_name, a.assign_date, assign_chg_hr, a.assign_hours, assign_charge from employee e join assignment a on e.emp_num = a.emp_num join job j on j.job_code = a.assign_job join project p on p.proj_num = a.proj_num order by proj_name";



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

export const getProjectInfo = (request:any, response:any) => {
    pool.query(projectQuery)
    .then((results:any) => response.status(200).json(results.rows))
    .catch((error:any) => console.error(`Error: ${error}`))
}