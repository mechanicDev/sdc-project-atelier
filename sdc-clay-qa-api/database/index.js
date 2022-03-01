const { Client, Pool } = require('pg');
require('dotenv').config();

const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT
});

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT
});

// DB Methods
const DB = {
  query: async function (query) {
    client.connect();
    const response = await client.query(query)
    return response.rows;
    client.end()
  },

  poolQuery: async function () {
    const client = pool.connect()
    try {
      const response = await client.query(query)
      client.release()
    } catch (err) {
      console.log('Error')
    }
  }
}

module.exports = DB;