const Express = require('express');
const app = Express();
require('dotenv').config();
const PORT = process.env.PORT;
const DB = require('./database/index.js')
const questions = require('./qa');
const cors = require('cors');

app.use(cors());
app.use('/qa', questions);

app.get('/products/:product_id', (req, res) => {
  // console.log('Running here???')
  res.status(200).send({
    "id": 3,
    "name": "Morning Joggers",
    "slogan": "Make yourself a morning person",
    "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    "category": "Pants",
    "default_price": 40
  });
})

app.get('/test', (req, res) => {
  res.status(200).send('Hallo');
});

module.exports = app;
