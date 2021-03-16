"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectInfo = exports.getAllEmployees = void 0;
var index_1 = require("./index");
var employeeQuery = "SELECT e.emp_num, e.emp_fname, e.emp_lname, i.img, j.job_description, j.job_chg_hour FROM employee e JOIN job j ON e.job_code = j.job_code join img i on i.emp_num = e.emp_num";
var projectQuery = "select e.emp_num, e.emp_fname, e.emp_lname, j.job_description, p.proj_name, a.assign_date, assign_chg_hr, a.assign_hours, assign_charge from employee e join assignment a on e.emp_num = a.emp_num join job j on j.job_code = a.assign_job join project p on p.proj_num = a.proj_num order by proj_name";
var getAllEmployees = function (request, response) {
    // use pool to send query request
    index_1.pool.query(employeeQuery)
        // for result received, set response status to 200 and parse object
        // result is returned for every susccesful query
        .then(function (result) { return response.status(200).json(result.rows); })
        // .then((result:any) => console.log(result))
        // catch error
        .catch(function (error) {
        console.error("Error: " + error);
    });
};
exports.getAllEmployees = getAllEmployees;
var getProjectInfo = function (request, response) {
    index_1.pool.query(projectQuery)
        .then(function (results) { return response.status(200).json(results.rows); })
        .catch(function (error) { return console.error("Error: " + error); });
};
exports.getProjectInfo = getProjectInfo;
//# sourceMappingURL=queries.js.map