const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { Pool } = require('pg');
const { POSTGRES_USER, POSTGRES_IP, POSTGRES_PASSWORD, POSTGRES_PORT } = require('../config/config');

const pool = new Pool({
  user: `${POSTGRES_USER}`, // user env at docker-compose
  host: `${POSTGRES_IP}`, // pg service name
  database: 'postgres', // default db name at pg container
  password: `${POSTGRES_PASSWORD}`, //password eng from docker-compose
  port: `${POSTGRES_PORT}`, // port address
});

(async () => {
  const client = await pool.connect()
  try {
    const res = await client.query('SELECT NOW()');
    console.log(`connected to postgres at ${res.rows[0]}`)
    // will log current time if success
  } finally {
    // Make sure to release the client before any error handling,
    // just in case the error handling itself throws an error.
    client.release()
  }
})().catch(err => console.log(err.stack));

app.get('/', (req, res) => {
  res.send('docker-compose with pg and dns!!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});