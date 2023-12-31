CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(255) NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "properties" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER REFERENCES "users" ON DELETE CASCADE,
  "address" VARCHAR(255) NOT NULL,
  "city" VARCHAR(255) NOT NULL,
  "state" VARCHAR(255) NOT NULL,
  "zip" INTEGER NOT NULL,
  "latitude" NUMERIC NOT NULL,
  "longitude" NUMERIC NOT NULL,
  "image_url" VARCHAR(255) NOT NULL,
  "description" VARCHAR(255) NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

27.89775
89.97867



tlong = ?
tlat = ?
userlong = ?
userlat = ?
output = long, lat



