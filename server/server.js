const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());
app.use(express.json());

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/pets';
const client = new Client(databaseUrl);
client.connect();

app.get('/api/dogs', (req, res) => {
  client.query(`
    SELECT
      id,
      name,
      type, 
      weight,
      age
    FROM dogs;
  `)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => console.log(err));
});

app.get('/api/dogs/:id', (req, res) => {
  client.query(`
    SELECT 
      id,
      name, 
      type,
      weight,
      age
    FROM dogs;
    WHERE id = $1;
  `,
  [req.params.id]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));

});

app.post('/api/dogs', (req, res) => {
  console.log('posting');
  const body = req.body;

  client.query(`
    INSERT INTO dogs (name, type, weight, age)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `,
  [body.name, body.type, body.weight, body.age]
  )
    .then(result => {
      // we always get rows back, in this case we just want first one.
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});

const PORT = 3000;

app.listen(PORT, () => console.log('app running...'));


