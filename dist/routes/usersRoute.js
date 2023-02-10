"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersHandler_1 = require("../handlers/usersHandler");
const usersRoute = express_1.default.Router();
usersRoute.get('/', usersHandler_1.verificationToken, usersHandler_1.usersIndex);
usersRoute.get('/:id', usersHandler_1.verificationToken, usersHandler_1.showUser);
usersRoute.post('/', usersHandler_1.createUser);
usersRoute.post('/:id/order', usersHandler_1.verificationToken, usersHandler_1.addProduct);
exports.default = usersRoute;
