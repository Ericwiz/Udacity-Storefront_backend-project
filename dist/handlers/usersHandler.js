"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.verificationToken = exports.createUser = exports.showUser = exports.usersIndex = void 0;
const users_1 = require("../models/users");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config;
const user = new users_1.UsersStore();
// Get all users
const usersIndex = async (_req, res) => {
    try {
        const myUsers = await user.index();
        res.json(myUsers);
    }
    catch (error) {
        res.status(403).json(error);
    }
};
exports.usersIndex = usersIndex;
// Get a single user
const showUser = async (req, res) => {
    try {
        const myUser = await user.show(req.params.id);
        res.json(myUser);
    }
    catch (error) {
        res.status(403).json(error);
    }
};
exports.showUser = showUser;
// Create new user
const createUser = async (req, res) => {
    const newUser = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password
    };
    try {
        const myUser = user.createUser(newUser);
        // @ts-ignore
        const token = jsonwebtoken_1.default.sign({ user: myUser }, process.env.TOKEN_SECRET);
        res.json(token);
    }
    catch (error) {
        res.status(403).json(error);
    }
};
exports.createUser = createUser;
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
const addProduct = async (req, res) => {
    const quantity = parseInt(req.body.quantity);
    const userId = req.params.id;
    const productId = req.body.product_id;
    const status = req.body.status;
    try {
        const addedProduct = await user.addProduct(productId, quantity, userId, status);
        res.json(addedProduct);
    }
    catch (error) {
        res.json(error);
        throw new Error(`${error}`);
    }
};
exports.addProduct = addProduct;
