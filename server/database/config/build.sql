
BEGIN;
DROP TABLE IF EXISTS users, products, services, orders, stylists, appointments, blogs, contacts CASCADE;
CREATE TABLE users (
  "id" SERIAL PRIMARY KEY,
  "first_name" VARCHAR(100) NOT NULL,
  "last_name" VARCHAR(100) NOT NULL,
  "email" VARCHAR(255) UNIQUE NOT NULL,
  "password" TEXT NOT NULL,
  "country" VARCHAR,
  "city" VARCHAR,
  "address" TEXT,
  "mobile" int,
  "alt_mobile" int,
  "role" VARCHAR(80) DEFAULT 'user',
  "created_at" TEXT DEFAULT (TO_CHAR(CURRENT_TIMESTAMP, 'DD/MM/YYYY HH12:MI:SS:MS:US AM'))
);

CREATE TABLE products(
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR NOT NULL,
  "brand" VARCHAR NOT NULL,
  "price" float NOT NULL,
  "quantity" int NOT NULL,
  "description" TEXT,
  "image" TEXT,
  "color" VARCHAR
);

CREATE TABLE services (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR NOT NULL,
  "category" VARCHAR NOT Null,
  "description" TEXT NOT NULL,
  "image" TEXT
);

CREATE TABLE orders (
  "id" SERIAL PRIMARY KEY,
  "state" VARCHAR,
  "order_date" timestamp,
  "price" float NOT NULL,
  "quantity" int NOT NULL,
  "payment_type" VARCHAR,
  "user_id" INT REFERENCES users(id),
  "product_id" INT REFERENCES products(id)
);

CREATE TABLE stylists (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR NOT NULL,
  "service_id" INT REFERENCES services(id)
);

CREATE TABLE appointments (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES users(id),
  "stylist_id" INT REFERENCES stylists(id),
  "service_id" INT REFERENCES services(id),
  "appointment_date" VARCHAR(100) NOT NULL,
  "appointment_time" VARCHAR(100) NOT NULL
);


CREATE TABLE blogs (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100) NOT NULL,
  "description" VARCHAR,
  "image" TEXT,
  "content" TEXT
);

CREATE TABLE contacts (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES users(id),
  "username" VARCHAR(100) NOT NULL,
  "mobile" TEXT,
  "message" TEXT,
  "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
  "email" VARCHAR
);
COMMIT;
