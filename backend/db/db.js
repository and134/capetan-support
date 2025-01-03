const { Pool } = require('pg');
const pool = new Pool({
    user: 'in_oras',
    host: 'localhost',
    database: 'in_oras',
    password: 'in_oras',
    port: 1409,
  });

module.exports = pool;
