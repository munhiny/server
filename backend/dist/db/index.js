"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: "awesome5",
    host: "localhost",
    database: "companyx",
    password: "",
    port: 5432,
});
//# sourceMappingURL=index.js.map