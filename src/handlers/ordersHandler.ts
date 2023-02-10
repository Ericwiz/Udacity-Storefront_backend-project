import { Order, ordersQueries } from "../models/order";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config

const order = new ordersQueries()
export const currentOrderByUser = async (req: Request, res:Response) => {
    try {
    const user_id = req.body.user_id;
    const myCurrentOrder = await order.currentOrder(user_id)
    res.json(myCurrentOrder)
    } catch (error) {
        res.status(403).send(error)
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

export { Order };
