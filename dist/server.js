"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var usersRoute_1 = __importDefault(require("./routes/usersRoute"));
var productRoute_1 = __importDefault(require("./routes/productRoute"));
var ordersRoute_1 = __importDefault(require("./routes/ordersRoute"));
var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
var app = (0, express_1["default"])();
var address = "0.0.0.0:3000";
app.use(body_parser_1["default"].json());
app.use((0, cors_1["default"])(corsOptions));
app.use('/users', usersRoute_1["default"]);
app.use('/products', productRoute_1["default"]);
app.use('/orders', ordersRoute_1["default"]);
app.get('/', function (_req, res) {
    res.send('Welcome to Storefront Backend');
});
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
exports["default"] = app;
