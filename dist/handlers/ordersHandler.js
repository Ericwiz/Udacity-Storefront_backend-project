"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificationToken = exports.currentOrderByUser = void 0;
const order_1 = require("../models/order");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config;
const order = new order_1.ordersQueries();
const currentOrderByUser = async (req, res) => {
    try {
        const user_id = req.body.user_id;
        const myCurrentOrder = await order.currentOrder(user_id);
        res.json(myCurrentOrder);
    }
    catch (error) {
        res.status(403).send(error);
    }
};
exports.currentOrderByUser = currentOrderByUser;
// @ts-ignore
const verificationToken = async (req, _res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        const token = authorizationHeader?.split(' ')[1];
        // @ts-ignore
        jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        next();
    }
    catch (error) {
        throw new Error(`${error}`);
    }
};
exports.verificationToken = verificationToken;
