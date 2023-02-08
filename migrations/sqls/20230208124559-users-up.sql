CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname  VARCHAR(64) NOT NULL,
    lastname VARCHAR(64) NOT NULL,
    password VARCHAR NOT NULL
);