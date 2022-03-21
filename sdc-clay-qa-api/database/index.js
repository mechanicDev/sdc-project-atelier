const { Client, Pool } = require('pg');
require('dotenv').config();



const client = new Client({
  user: process.env.AWS_USER,
  host: process.env.AWS_HOST,
  database: process.env.AWS_DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT
});

client.connect()

module.exports.client = client;

module.exports.pool = new Pool({
  user: process.env.AWS_USER,
  host: process.env.AWS_HOST,
  database: process.env.AWS_DATABASE,
  // password: process.env.PASSWORD,
  port: process.env.DB_PORT,
  max: 20,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0
});

// DB Methods
// const DB = {
//   query: async function (query) {
//     const startTime = new Date();
//     await client.connect();
//     const response = await client.query(query)
//     const endTime = new Date();
//     // console.log(`Operation took ${endTime - startTime}ms`);
//     client.end()
//     return response.rows;
//   },

//   poolQuery: async function (query) {
//     console.log('The Query: ', query);
//     const startTime = new Date();
//     try {
//       const client = await pool.connect()
//       // console.log('we are here: ', query);
//       let response = await pool.query(query)
//       // console.log('This is the response thing: ', response.rows)
//       const endTime = new Date();
//       // console.log(`Operation took ${endTime - startTime}ms`);
//       return response.rows;
//       client.release()
//     } catch (err) {
//       console.log('DB Connection Error: ', err)
//     }
//   }
// }


// Getting time: new Date() before and after... subtract new from old