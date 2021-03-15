"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var pg_1 = require("pg");
var pgTypes = __importStar(require("pg-types"));
var moment_1 = __importDefault(require("moment"));
exports.pool = new pg_1.Pool({
    user: "awesome5",
    host: "localhost",
    database: "companyx",
    password: "",
    port: 5432,
});
var parseDate = function (val) {
    return val === null ? null : moment_1.default(val).format('YYYY-MM-DD');
};
// parse parse numeric values as numeric and not as string
pgTypes.setTypeParser(1700, function (value) { return parseFloat(value); });
pgTypes.setTypeParser(1082, function (value) {
    return value === null ? null : parseDate(value);
});
//# sourceMappingURL=index.js.map