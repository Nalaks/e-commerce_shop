"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var products_1 = __importDefault(require("./data/products"));
var db_1 = __importDefault(require("./config/db"));
dotenv_1.default.config();
db_1.default();
var app = express_1.default();
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    return console.log("running in " + process.env.NODE_ENV + " mode and listening on port " + PORT);
});
app.get('/api/products', function (req, res) { return res.json(products_1.default); });
app.get('/api/products/:id', function (req, res) {
    var product = products_1.default.filter(function (x) { return x._id === req.params.id; });
    res.json(product);
});
