const app = require('./app.js');
require('dotenv').config();

app.listen(5050, (req, res) => {
  console.log(`Listening on Port ${process.env.PORT}`)
});
