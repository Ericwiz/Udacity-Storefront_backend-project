// @ts-ignore
import client from "../database";

export type Product = {
    id?: number,
    name: string,
    price: string,
    category: string
}

export class ProductStore {
    async index(): Promise<Product[]> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT * FROM products';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (error) {
            throw new Error(`Could not get users. ${error}`)
        }
    }

    async show(id: string): Promise<Product> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT * FROM products WHERE id = ($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Could not get user with id ${id}. ${error}`)
        }
    }

    async createProduct(p: Product): Promise<Product> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'INSERT INTO products (name, price, category) VALUES ($1, $2, $3)RETURNING *';
            const result = await conn.query(sql, [p.name, p.price, p.category]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Could not create product ${p.name}. ${error}`)
        }
    }
}