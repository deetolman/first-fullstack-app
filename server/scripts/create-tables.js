
// "require" pg
const pg = require('pg');
// Use the pg Client
const Client = pg.Client;
// database url
const databaseUrl = 'postgres://localhost:5432/pets';
// on windows, linux, or other systems where you need to 
// specify username and password
// const databaseUrl = 'postgres://<username>:<password>@localhost:5432/liveable_cities';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS adoptable_pets (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        type VARCHAR(256),
        weight INTEGER NOT NULL,
        age INTEGER
      );
    `);
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });