"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ordersHandler_1 = require("../handlers/ordersHandler");
const express_1 = __importDefault(require("express"));
const ordersRoute = express_1.default.Router();
ordersRoute.post('/current_order', ordersHandler_1.verificationToken, ordersHandler_1.currentOrderByUser);
exports.default = ordersRoute;
