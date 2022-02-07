const Express = require('express');
const app = Express();
require('dotenv').config();
const PORT = process.env.PORT;

app.use('/', (req, res) => {
  console.log('Hallo this is working');
  res.status(200).send('Hulla dis is werking');
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}.`);
})