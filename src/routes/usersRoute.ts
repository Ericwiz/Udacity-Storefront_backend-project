import express from "express";
import { usersIndex, showUser, createUser, verificationToken, addProduct } from "../handlers/usersHandler";

const usersRoute = express.Router();

usersRoute.get('/', verificationToken, usersIndex)
usersRoute.get('/:id',verificationToken, showUser)
usersRoute.post('/', createUser)
usersRoute.post('/:id/orders', verificationToken, addProduct)
export default usersRoute;