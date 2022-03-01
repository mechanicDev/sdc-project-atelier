const express = require('express');
const router = express.Router();
const DB = require('./database/index.js');
const U = require('./Utils/utils.js');

router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get('/questions', (req, res) => {
  res.send('The router is working to the base route');
});

router.get('/questions/:id/answers', (req, res) => {

  U.questionsIdAnswers(req.params.id)
    .then(res => console.log('This is the result: ', res))
    .catch(res => console.log('This would be an error: ', res))

  res.end()
});

module.exports = router;
