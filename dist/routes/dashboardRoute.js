"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dashboardHandler_1 = require("../handlers/dashboardHandler");
var express_1 = __importDefault(require("express"));
var dashboardRoute = express_1["default"].Router();
dashboardRoute.get('/current_order', dashboardHandler_1.currentOrderByUser);
// dashboardRoute.get('/top_five_products', topFiveProduct);
exports["default"] = dashboardRoute;
