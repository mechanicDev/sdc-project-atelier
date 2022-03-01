const Express = require('express');
const app = Express();
require('dotenv').config();
const PORT = process.env.PORT;
const DB = require('./database/index.js')
const questions = require('./qa');

app.use('/qa', questions);

// app.get('/', (req, res) => {
//   console.log('Hallo this is working');
//   // DB.query("SELECT * FROM questions WHERE product_id = '1';")
//   res.status(200).send('You know it');
// });

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}.`);
});
