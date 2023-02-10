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

    // async ProductWithHighestPriceTag(): Promise<{name: string, price: number}[]>  {
    //     try {
    //         // @ts-ignore
    //     const conn = await client.connect();
    //     const sql = 'SELECT * FROM products ORDER BY price DESC lIMIT 5';
    //     const result = await conn.query(sql);
    //     conn.release();
    //     return result.rows
    //     } catch (error) {
    //         throw new Error(`${error}`);
            
    //     }
    // }
}