"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var usersHandler_1 = require("../handlers/usersHandler");
var usersRoute = express_1["default"].Router();
usersRoute.get('/', usersHandler_1.verificationToken, usersHandler_1.usersIndex);
usersRoute.get('/:id', usersHandler_1.verificationToken, usersHandler_1.showUser);
usersRoute.post('/', usersHandler_1.createUser);
usersRoute.post('/:id/order', usersHandler_1.verificationToken, usersHandler_1.addProductToAnOrder);
exports["default"] = usersRoute;
