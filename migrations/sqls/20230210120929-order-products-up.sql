CREATE TABLE order_products (
    id SERIAL PRIMARY KEY,
    orderQuantity integer NOT NULL,
    order_id bigint REFERENCES orders(id),
    product_id bigint REFERENCES products(id)
);
ALTER TABLE order_products DROP CONSTRAINT order_products_product_id_fkey;
ALTER TABLE order_products DROP CONSTRAINT order_products_order_id_fkey;