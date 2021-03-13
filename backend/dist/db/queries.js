"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllEmployees = void 0;
var index_1 = require("./index");
var employeeQuery = "SELECT e.emp_fname, e.emp_lname, j.job_description, j.job_chg_hour FROM employee e JOIN job j ON e.job_code = j.job_code";
var getAllEmployees = function (request, response) {
    // use pool to send query request
    index_1.pool.query(employeeQuery)
        // for result received, set response status to 200 and parse object
        // result is returned for every susccesful query
        .then(function (result) { return response.status(200).json(result.rows); })
        // catch error
        .catch(function (error) {
        console.error("Error: " + error);
    });
};
exports.getAllEmployees = getAllEmployees;
//# sourceMappingURL=queries.js.map