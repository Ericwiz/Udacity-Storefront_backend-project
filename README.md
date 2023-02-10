# STOREFRONT_BACKEND API DOCUMENTATION

## Overview

This API is part of the udacity fullstack Javascript nanodegree projects, it provides a backend for a shopping application with the following features:

* User Authentication and Authorization.
* Management of orders, users and products.
* CRUD operation for orders, users and products.

## Technology Stack

* Node js.
* Express.
* Typescript/Javascript.
* PostgreSQL.

## Setting up the development environment

1. Clone the repository
2. Install the dependecies by running `yarn install`
3. Create a `.env` file and set the required environment viarables
4. Start the application by running `yarn watch`.

## API endpoints

The API has the following endpoints:

### Users

* `GET /users`: Retrieve a list of all users.
* `GET /users/:id`: Retrieve a specific user by ID.
* `POST /users`: Create a new user.
* `POST /users/:id/orders` Add a product to an order. [Only a user can add a product to an order].
* `PUT /users/:id`: Update an existing user. [Not Implemented]
* `DELETE /users/:id`: Delete a user. [Not Implemented].


### Products

* `GET /products`: Retrieve a list of all products.
* `GET /products/:id`: Retrieve a specific product by ID.
* `POST /products`: Create a new product [Only a user can create a product].
* `PUT /products/:id`: Update an existing user. [Not Implemented].
* `DELETE /products/:id`: Delete a product. [Not Implemented].

### Orders
* `POST /orders/current_order`: Retrieve the current order/s  [args: user ID].

## Data Models

The API uses the following data models:

### User

* `id`: Unique identifier for the user.
* `firstname`: User's firstname.
* `lastname`: User's lastname.
* `password`: User's password.

### Product

* `id`: Unique identifier for the Product.
* `name`: Product's name.
* `price`: Product's price.
* `category`: Product's category.

### Order

* `id`: Unique identifier for an order.
* `product_id`: ID of the product to be ordered.
* `quantity`: Quantity of the product to be ordered.
* `user_id`: ID of the user who is making the order.
* `status`: Status of the order, either `complete` or `active`

### Order_products
* `id`: Unique identifier for order_products
* `product_id`: ID of product in the `order_products table`
* `order_id`: ID of the order in the order_pruducts table.
* `orderQuantity`: Quantity of the order in the order_products.  [should match the quantity in the orders table].

## Test
RUN `yarn test`.

The `yarn test` command will create the tables then drop the tables after the test

## Migration

* RUN `db-migrate up` to `CREATE` tables [Tables already exists in the database]
* RUN `db-migrate down` to `DROP` tables [Tables already exists in the database]


## Security

The API uses Bcrypt and Json Web Token (JWT) for Authentication and Authorization.

## License

This API is licensed under the MIT License.

## IMPORTANT NOTE.
* This project was build according to the project requirements specified by Udacity in the `requirement.md file`.

* A product can be added to the cart with this API route `POST /users/:id/orders` [order a product].

## Scalability

 The API has been built with modularity in mind, making it easier to add additional resources and capabilities as needed.
