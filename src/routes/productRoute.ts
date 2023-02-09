import express from "express";
import { productsIndex,createProduct, showProduct, verificationToken} from "../handlers/productsHandlers";
const productRoute = express.Router();

productRoute.get('/', productsIndex)
productRoute.get('/:id', showProduct)
productRoute.post('/', verificationToken, createProduct)

export default productRoute;