const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres', // user env at docker-compose
  host: '172.18.0.2', // check your pg container ip address
  database: 'marketplace', // default db name at pg container
  password: 'postgres', //password eng from docker-compose
  port: 5432, // port address
});

;(async () => {
  const client = await pool.connect()
  try {
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0])
    // will log current time if success
  } finally {
    // Make sure to release the client before any error handling,
    // just in case the error handling itself throws an error.
    client.release()
  }
})().catch(err => console.log(err.stack))

app.get('/', (req, res) => {
  res.send('docker-compose with pg!!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});