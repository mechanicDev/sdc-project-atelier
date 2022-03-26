const { Client, Pool } = require('pg');
require('dotenv').config();

const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432
});

client.connect();

module.exports.client = client;


// module.exports.pool = new Pool({
//   user: process.env.AWS_USER,
//   host: process.env.AWS_HOST,
//   database: process.env.AWS_DATABASE,
//   // password: process.env.PASSWORD,
//   port: process.env.DB_PORT,
//   max: 20,
//   connectionTimeoutMillis: 0,
//   idleTimeoutMillis: 0
// }).connect();

