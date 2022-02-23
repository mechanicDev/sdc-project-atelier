const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  user: process.env.USER,
  host:process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT
});

// DB Methods
const DB = {
  query: function () {
    client.connect();
    client.query("SELECT * FROM questions WHERE product_id = '1';")
      .then(res => {
        console.log('Connection Successful: ', res.rows)
        client.end();
      })
      .catch(err => console.log('Error: ', err));
  }
}

module.exports = DB;