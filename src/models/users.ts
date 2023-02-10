// import client module from database.ts
// @ts-ignore
import client from "../database";

// import bcrypt library
import bcrypt from 'bcrypt';

// import dotenv library
import dotenv from 'dotenv';
dotenv.config()

// get the environment viarables from the env file
const pepper = process.env.BCRYPT_PASSWORD
const saltRounds = process.env.SALT_ROUNDS
const env = process.env.ENV

// create a typescript type for the values in the users table
export type User = {
    id?: number,
    firstname: string,
    lastname: string,
    password: string
}

// Create a model class for the models
export class UsersStore {
    async index(): Promise<User[]> {
        try {
            const sql = 'SELECT * FROM users'
            // @ts-ignore
            const conn = await client.connect();
            const result = await conn.query(sql);
            conn.release();
            return result.rows
        } catch (error) {
            throw new Error(`Could not get users. Error: ${error}`);
        }
    }

    async show(id: string): Promise<User> {
        try {
            const sql = 'SELECT * FROM users WHERE id = ($1)';
            // @ts-ignore
            const conn = await client.connect();
            const result = await conn.query(sql, [id]);
            conn.release()
            return result.rows[0]
        } catch (error) {
            throw new Error(`Could not get the user with id ${id}. Error: ${error}`)
        }
    }

    async createUser(u: User): Promise<User> {
        try {
        const sql = 'INSERT INTO users (firstname, lastname, password) VALUES($1, $2, $3) RETURNING *';
        // @ts-ignore
        const conn = await client.connect();
        // Checking if the evironment is test, then the password will not be hashed so it can pass the test
        if(env === 'dev') {
            // @ts-ignore
            const hash = bcrypt.hashSync(u.password+pepper, parseInt(saltRounds));
            const result = await conn.query(sql, [u.firstname, u.lastname, hash])
            conn.release()
            return result.rows[0];
        }
        const result = await conn.query(sql, [u.firstname, u.lastname, u.password])
            conn.release()
            return result.rows[0];
    } catch(error) {
        throw new Error(`Cannot create new user ${u.firstname}: Error: ${error}`)
    }
    }

    // async updateUser(u:User): Promise<User> {
    //     try {
    //         const sql = 'UPDATE users SET (firstname, lastname, password) = ($1, $2, $3) WHERE id = ($4) RETURNING *';

    //         // @ts-ignore
    //         const  conn = await client.connect()
    //         if(env === "dev") {
    //             // @ts-ignore
    //             const hash = bcrypt.hashSync(u.password+pepper, parseInt(saltRounds))
    //             const result = conn.query(sql, [u.firstname, u.lastname, hash, u.id])
    //             conn.release()
    //             return result.rows[0]
    //         }
    //         const result = conn.query(sql, [u.firstname, u.lastname, u.password, u.id])
    //         conn.release()
    //         return result.rows[0]
    //     } catch (error) {
    //         throw new Error(`Could not update user with id ${u.id}: ${error}`)
    //     }
    // }

    async addProduct(productId: string, quantity: number, userId: string, status: string): Promise<User> {
        try {
            const sql = 'INSERT INTO orders (product_id, quantity, user_id, status) VALUES($1, $2, $3, $4) RETURNING *'

            // @ts-ignore
            const conn = await client.connect();
            const result = await conn.query(sql, [productId, quantity, userId, status]);
            conn.release()
            return result.rows[0]
        
        } catch (error) {
            throw new Error(`Could not add product ${productId} to order r: ${error}`);
        }
    }

}