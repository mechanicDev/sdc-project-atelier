const Express = require('express');
const app = Express();
require('dotenv').config();
const PORT = process.env.PORT;
const DB = require('./database/index.js')
const questions = require('./qa');
const cors = require('cors');

app.use(cors());
app.use('/qa', questions);

app.get('/test', (req, res) => {
  res.status(200).send('Hallo');
});

module.exports = app;
