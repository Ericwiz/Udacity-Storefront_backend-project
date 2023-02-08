CREATE TABLE order_products(
    id SERIAL PRIMARY KEY,
    orderQuantity VARCHAR,
    order_id bigint REFERENCES orders(id) NOT NULL,
    product_id bigint REFERENCES products(id) NOT NULL
);
