const client = require('../db-client');
const dogs = require('./dogs.json');

Promise.all(
  dogs.map(dog => {
    return client.query(`
      INSERT into dogs (
        energy_id, name, type, weight, age
      ) 
      SELECT
        id as energy_id,
        $1 as name,
        $2 as type,
        $3 as weight,
        $4 as age
      FROM energy
      WHERE direction = $5;
    `,
    [dog.name, dog.type, dog.weight, dog.age]
    );
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());