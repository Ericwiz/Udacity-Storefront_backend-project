"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var ordersHandler_1 = require("../handlers/ordersHandler");
var express_1 = __importDefault(require("express"));
var ordersRoute = express_1["default"].Router();
ordersRoute.post('/current_order', ordersHandler_1.verificationToken, ordersHandler_1.currentOrderByUser);
ordersRoute.post('/:id/products', ordersHandler_1.verificationToken, ordersHandler_1.addProduct);
exports["default"] = ordersRoute;
