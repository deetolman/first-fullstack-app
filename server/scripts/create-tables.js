const client = require('../db-client');

client.query (`
  CREATE TABLE IF NOT EXISTS energy (
  id SERIAL PRIMARY KEY,
  name VARCHAR(256) NOT NULL,
  );

  CREATE TABLE IF NOT EXISTS dogs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256),
    type INTEGER NOT NULL REFERENCES type(id),
    weight INTEGER,
    age INTEGER,
    energy VARCHAR(1024)
  );
  )  
`);