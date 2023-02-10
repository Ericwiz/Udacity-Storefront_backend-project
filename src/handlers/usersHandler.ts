import { Request, Response} from "express";
import { User, UsersStore } from "../models/users";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config

const user = new UsersStore()

// Get all users
export const usersIndex = async(_req: Request, res: Response) => {
    try {
        const myUsers = await user.index()
        res.json(myUsers)
    } catch (error) {
        res.status(403).json(error)
    }
}

// Get a single user
export const showUser = async (req: Request, res: Response) => {
    try {
        const myUser = await user.show(req.params.id);
        res.json(myUser)
    } catch (error) {
        res.status(403).json(error)
    }
}
// Create new user
export const createUser =async (req: Request, res: Response) => {
    const newUser: User = {
        firstname: req.body.firstname, 
        lastname: req.body.lastname,
        password: req.body.password
    }
    try {
        
        const myUser = await user.createUser(newUser);
        // @ts-ignore
        const token = jwt.sign({user: myUser}, process.env.TOKEN_SECRET)
        res.json(token)
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

export const addProductToAnOrder = async(req: Request, res: Response) => {
    const quantity: number = parseInt(req.body.quantity)
    const userId: string = req.params.id
    const productId: string = req.body.product_id
    const status: string = req.body.status


    try {
        const addedProduct = await user.addProduct(productId, quantity, userId, status)
        res.json(addedProduct)
    } catch (error) {
        res.json(error)
        throw new Error(`${error}`);
        
    }
}