const client = require('../db-client');

client.query(`
    DROP TABLE IF EXISTS dogs;
    DROP TABLE IF EXISTS energy;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });