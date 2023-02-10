"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsHandlers_1 = require("../handlers/productsHandlers");
const productRoute = express_1.default.Router();
productRoute.get('/', productsHandlers_1.productsIndex);
productRoute.get('/:id', productsHandlers_1.showProduct);
productRoute.post('/', productsHandlers_1.verificationToken, productsHandlers_1.createProduct);
exports.default = productRoute;
