import { Pool } from "pg";
import dotenv from 'dotenv';
dotenv.config()

const {
    POSTGRES_HOST,
    POSTGRES_USER,
    POSTGRES_DB,
    POSTGRES_PASSWORD,
    POSTGRES_TEST_DB,
    ENV
} = process.env

let client

if(ENV === "dev") {
    client = new Pool({
        host: POSTGRES_HOST,
        user: POSTGRES_USER,
        database: POSTGRES_DB,
        password: POSTGRES_PASSWORD
    }) 
}

if(ENV ==="test") {
    client = new Pool({
        host: POSTGRES_HOST,
        user: POSTGRES_USER,
        database: POSTGRES_TEST_DB,
        password: POSTGRES_PASSWORD
    }) 
}

export default client;