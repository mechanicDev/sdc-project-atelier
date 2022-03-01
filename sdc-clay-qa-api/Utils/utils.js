const DB = require('../database/index.js');

module.exports.questionsIdAnswers = async function(id) {
  let result = {};

  try {
    const questionsData = await DB.poolQuery(`SELECT * FROM answers WHERE question_id = ${id}`)
    // console.log('This is the questionsData: ', questionsData);

    // for (let i=0; i < questionsData.length; i++) {
    //   const answersPhotos = await DB.poolQuery(`SELECT * FROM answers_photos WHERE answer_id = ${questionsData[i].id}`)

    //   console.log('This is the array for the photos... ', answersPhotos);

    // }

  } catch (err) {
    console.log('This is the try catch error: ', err);
  }



}
