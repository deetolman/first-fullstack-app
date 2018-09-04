const client = require('../db-client');
const energy = require('./energy.json');

Promise.all(
  energy.map(energy => {
    return client.query(`
        INSERT INTO energy (name, direction)
        VALUES ($1, $2);
    `,
    [energy.name, energy.direction]
    );
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());