// @ts-ignore
import client from "../database";

export type Order = {
    id?: number,
    quantity: number,
    product_id: string,
    user_id: string,
    status: string
}

export class OrderStore {
    async index(): Promise<Order[]> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT * FROM orders';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (error) {
            throw new Error(`Could not get orders. ${error}`)
        }
    }

    async show(id: string): Promise<Order> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT * FROM orders WHERE id = ($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Could not get order with id ${id}. ${error}`)
        }
    }

    async createOrder(o: Order): Promise<Order> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'INSERT INTO orders (quantity, product_id, user_id, status) VALUES ($1, $2, $3, $4) RETURNING *';
            const result = await conn.query(sql, [o.quantity, o.product_id, o.user_id, o.status]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Could not create order. ${error}`)
        }
    }
}