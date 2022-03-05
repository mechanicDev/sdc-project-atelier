const DB = require('../database/index.js');

module.exports.questionsIdAnswers = async function(id) {
  let result = {};

  const questionsData = await DB.poolQuery(`SELECT * FROM answers WHERE question_id = ${id}`);
  // console.log('This is the questionsData: ', questionsData);

  let photoUrls = [];
  for(let i = 0; i < questionsData.length; i++) {
    let current = questionsData[i];
    // console.log('Current: ', current)
    let result = await DB.poolQuery(`SELECT * FROM answers_photos WHERE answer_id = ${current.id}`);
    questionsData[i].photos = result;
  }

  // console.log('Result: ', questionsData)
  return questionsData;
};


module.exports.questionsIdHelpful = async function(id) {
  const result = await DB.poolQuery(`UPDATE questions SET helpful = helpful + 1 WHERE id = ${id}`);
};

module.exports.answersIdHelpful = async function(id) {
  const result = await DB.poolQuery(`UPDATE answers SET helpful = helpful + 1 WHERE id = ${id}`);
};

module.exports.answersIdReported = async function(id) {
  const result = await DB.poolQuery(`UPDATE answers SET reported = reported + 1 WHERE id = ${id}`)
};

module.exports.questionsId = async function(id, page, count) {
  const result = await DB.poolQuery(`SELECT * FROM questions WHERE id = ${id}`)
  return result;
}