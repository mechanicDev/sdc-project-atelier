const { Client, Pool } = require('pg');
const app = require('express')();
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
  port: process.env.DB_PORT,
  max: 20,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0
});

// DB Methods
const DB = {
  query: async function (query) {
    const startTime = new Date();
    await client.connect();
    const response = await client.query(query)
    const endTime = new Date();
    // console.log(`Operation took ${endTime - startTime}ms`);
    client.end()
    return response.rows;
  },

  poolQuery: async function (query) {
    // console.log('The Query: ', query);
    const startTime = new Date();
    const client = pool.connect()
    try {
      // console.log('we are here: ', query);
      let response = await pool.query(query)
      // console.log('This is the response thing: ', response.rows)
      const endTime = new Date();
      // console.log(`Operation took ${endTime - startTime}ms`);
      return response.rows;
      client.release()
    } catch (err) {
      console.log('Error')
    }
  }
}

module.exports = DB;

// Getting time: new Date() before and after... subtract new from old