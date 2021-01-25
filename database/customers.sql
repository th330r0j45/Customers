CREATE DATABASE customers;

USE customers;

CREATE TABLE users (
    id INTEGER PRIMARY KEY ,
    name VARCHAR,
    phone VARCHAR,
    email VARCHAR,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
DESCRIBE users