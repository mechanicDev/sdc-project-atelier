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
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(error))
});

router.put('questions/:question_id/helpful', (req, res) => {
  U.questionsIdHelpful(req.params.id)
    .then(data => console.log('This is the data: ', data))
    .catch(data => console.log('This is the error: ', error))
    res.send('Hallo');
});


module.exports = router;
