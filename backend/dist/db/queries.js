"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllEmployees = void 0;
var index_1 = require("./index");
var getAllEmployees = function (request, response) {
    index_1.pool.query("SELECT e.emp_fname, e.emp_lname, j.job_description, j.job_chg_hour FROM employee e JOIN job j ON e.job_code = j.job_code;")
        .then(function (results) { return response.status(200).json(results.rows); })
        .catch(function (error) {
        console.log('Error: ', error);
    });
};
exports.getAllEmployees = getAllEmployees;
//# sourceMappingURL=queries.js.map