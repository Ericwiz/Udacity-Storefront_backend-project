# Database Schema
The following section outlines the database schema for the backend API of this project. The schema includes the tables and columns that will store and manage the data used in the API. By clearly defining the structure of the database, this schema will serve as a blueprint for the development of the backend and ensure that the data storage meets the requirements of the API.

The database for this project will use the following tables and columns:

### Users

- id (integer, primary key)
- firstname (string, required)
- lastname (string, required)
- password (string, required)

### Products

- id (integer, primary key)
- name (string, required)
- price (decimal, required)
- category

### Orders

- id (integer, primary key)
- user_id (integer, required, foreign key to users.id)
- product_id (integer, required, foreign key to products.id)
- status (string, required, default value: 'active')

This schema will support the following API endpoints:
### Post 

- POST /users (Will return all users)
- POST /products (Will return all products)
- POST /users/:userId/orders (order a product) [args: quantity, product_id, status]
- POST /orders/:id/products [args: orderQuantity, product_id]
- POST /orders/current_order (Get all active order by a user) [arg: user_id]

### Get
- GET /users (Will return all users)
- GET /products (Will return all products)
- GET /users/:id (get user by id)
- GET /products/:id (get product by id)


## NOTE
* No support for `PUT` and `DELETE` as it was not part of the project requirements. 

## Scalability

One of the key goals of this project was to ensure that it could be easily scaled in the future as the needs of the API change. To achieve this, the following steps were taken during the development process:

- Use of modular components: This allows new functionality to be added with minimal impact on existing code and makes it easier to understand and maintain the codebase.

- Use of a scalable database architecture: The database has been designed in a way that allows for horizontal scaling, which means that it can easily accommodate an increasing amount of data without slowing down.


By taking these steps, I am confident that this API can be easily scaled in the future to meet the evolving needs of the project.

