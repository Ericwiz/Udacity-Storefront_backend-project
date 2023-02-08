CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    product_id bigint REFERENCES products(id) NOT NULL,
    quantity VARCHAR NOT NULL,
    user_id bigint REFERENCES users(id) NOt NULL,
    status VARCHAR (20) NOT NULL
);