require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER || 'monolito_user',
  host: process.env.DB_HOST || 'db',
  database: process.env.DB_NAME || 'monolito_db',
  password: process.env.DB_PASSWORD || 'monolito123',
  port: process.env.DB_PORT || 5432,
});

module.exports = pool;
