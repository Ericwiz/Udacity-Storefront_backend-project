// @ts-ignore
import client from "../database";

export type Order = {
    id?: number,
    product_id: string,
    quantity?: number,
    user_id: string,
    status: string
}

export class  ordersQueries{
    [x: string]: any;
    async currentOrder(userId: string): Promise<Order[]>  {
        try {
            // @ts-ignore
        const conn = await client.connect();
        const sql = `SELECT id, user_id, product_id, status FROM orders WHERE user_id = ($1) AND status = 'active' `;
        const result = await conn.query(sql, [userId]);
        conn.release();
        return result.rows
        } catch (error) {
            throw new Error(`${error}`);
            
        }
    }

    async addProduct(quantity: number, orderId: string, productId: string): Promise<Order> {
        try {
            const sql = 'INSERT INTO order_products (orderQuantity, product_id, order_id) VALUES($1, $2, $3) RETURNING *'

            // @ts-ignore
            const conn = await client.connect();
            const result = await conn.query(sql, [quantity, productId, orderId]);
            conn.release()
            return result.rows[0]
        
        } catch (error) {
            throw new Error(`Could not add product ${productId} to order-products: ${error}`);
        }
    }
}