const DB = require('../database/index.js');

module.exports.questionsIdAnswers = async function (id) {
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
}
