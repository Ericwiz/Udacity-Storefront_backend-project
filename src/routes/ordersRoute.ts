import { currentOrderByUser, verificationToken } from '../handlers/ordersHandler';
import express from 'express';

const ordersRoute = express.Router()

ordersRoute.post('/current_order', verificationToken, currentOrderByUser);


export default ordersRoute;