"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var queries_1 = require("./db/queries");
var app = express_1.default();
app.use(cors_1.default({
    origin: "http://localhost:3000"
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
var port = process.env.PORT || 4000;
app.get('/', function (req, res) {
    res.send('Hello World! Welcome to CompanyX');
});
app.get('/employees', queries_1.getAllEmployees);
app.listen(port, function () {
    console.log("listening on port " + port);
});
//# sourceMappingURL=app.js.map