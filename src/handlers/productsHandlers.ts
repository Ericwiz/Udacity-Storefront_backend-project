import { Request, Response} from "express";
import { Product, ProductStore } from "../models/product";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config

const product = new ProductStore()

// Get all users
export const productsIndex = async(_req: Request, res: Response) => {
    try {
        const myProducts = await product.index()
        res.json(myProducts)
    } catch (error) {
        res.status(403).json(error)
    }
}

// Get a single product
export const showProduct = async (req: Request, res: Response) => {
    try {
        const myProduct = await product.show(req.params.id);
        res.json(myProduct)
    } catch (error) {
        res.status(403).json(error)
    }
}
// Create new product
export const createProduct =async (req: Request, res: Response) => {
    const newUser: Product = {
        name: req.body.name, 
        price: req.body.price,
        category: req.body.category
    }
    try {
        
        const myProduct = await product.createProduct(newUser);

        res.json(myProduct)
    } catch (error) {
        res.status(403).json(error)
    }
}

// @ts-ignore
export const verificationToken = async (req: Request, _res: Response, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        const token = authorizationHeader?.split(' ')[1];
        // @ts-ignore
        jwt.verify(token, process.env.TOKEN_SECRET)

        next()
    } catch (error) {
        throw new Error(`${error}`);
        
    }
}

