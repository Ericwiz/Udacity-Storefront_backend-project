"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificationToken = exports.createProduct = exports.showProduct = exports.productsIndex = void 0;
const product_1 = require("../models/product");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config;
const product = new product_1.ProductStore();
// Get all users
const productsIndex = async (_req, res) => {
    try {
        const myProducts = await product.index();
        res.json(myProducts);
    }
    catch (error) {
        res.status(403).json(error);
    }
};
exports.productsIndex = productsIndex;
// Get a single product
const showProduct = async (req, res) => {
    try {
        const myProduct = await product.show(req.params.id);
        res.json(myProduct);
    }
    catch (error) {
        res.status(403).json(error);
    }
};
exports.showProduct = showProduct;
// Create new product
const createProduct = async (req, res) => {
    const newUser = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    };
    try {
        const myProduct = await product.createProduct(newUser);
        res.json(myProduct);
    }
    catch (error) {
        res.status(403).json(error);
    }
};
exports.createProduct = createProduct;
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
