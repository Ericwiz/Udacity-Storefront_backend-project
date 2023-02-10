import { currentOrderByUser, verificationToken, addProduct } from '../handlers/ordersHandler';
import express from 'express';

const ordersRoute = express.Router()

ordersRoute.post('/current_order', verificationToken, currentOrderByUser);
ordersRoute.post('/:id/products', verificationToken, addProduct);


export default ordersRoute;