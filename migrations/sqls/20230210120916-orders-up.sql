CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    product_id bigint REFERENCES products(id) NOT NULL,
    quantity integer NOT NULL,
    user_id bigint REFERENCES users(id),
    status VARCHAR (20) NOT NULL
);
ALTER TABLE orders DROP CONSTRAINT orders_product_id_fkey;
-- ALTER TABLE orders DROP CONSTRAINT orders_product_id_fkey;