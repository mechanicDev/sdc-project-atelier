const express = require('express');
const router = express.Router();
const DB = require('./database/index.js');
const U = require('./Utils/utils.js');
const URL = require('url');

router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

//////////////////
// Get Requests //
//////////////////

router.get('/questions', (req, res) => {
  url = URL.parse(req.url, true).query
  console.log('URL: ', url)

  U.questionsId(url.product_id)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(200).send(error));
});

router.get('/questions/:id/answers', (req, res) => {
  U.questionsIdAnswers(req.params.id)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(error))
});


//////////////////
// Put Requests //
//////////////////

router.put('/report', (req, res) => {

});

router.put('/questions', (req, res) => {

});

router.put('/questions/:question_id/helpful', (req, res) => {
  U.questionsIdHelpful(req.params.question_id)
    .then(data => res.status(200).send(`Helpful count has been updated for question Id ${req.params.question_id}`))
    .catch(data => res.status(400).send(error));
});

router.put('/answers/:id/helpful', (req, res) => {
  console.log('Params: ', req.params)
  U.answersIdHelpful(req.params.id)
    .then(data => res.status(200).send(`Helpful count has been updated for answer ID ${req.params.answer_id}`))
    .catch(error => res.status(400).send(error));
});

router.put('/answers/:answer_id/report', (req, res) => {
  console.log('Params: ', req.params)
  U.answersIdReported(req.params.answer_id)
    .then(data => res.status(200).send(`Reported count has been updated for answer ID ${req.params.answer_id}`))
    .catch(error => res.status(400).send(error));
});


module.exports = router;
