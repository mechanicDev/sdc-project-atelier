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
  const result = await DB.poolQuery(`SELECT * FROM questions WHERE product_id = ${id}`)

  console.log('Query Result: ', result);
  return result;
}

module.exports.questionsPost = async function(body, name, email, product_id, date) {

  product_id = parseInt(product_id);
  console.log('Incoming params: ', product_id, date)

  const insertQuery = `INSERT INTO questions(product_id, body, date_written, asker_name, asker_email, reported, helpful)VALUES(${product_id}, '${body}', ${date}, '${name}', '${email}', 0, 0)`

  const insertTestQuery = ("INSERT INTO questions(product_id, body, date_written, asker_name, asker_email, reported, helpful) VALUES (987654321, 'I really like this product!!', 1647229353040, 'Joe', 'joe@email.com', 0, 0);")

  const result = await DB.poolQuery(insertQuery);

  console.log('Result: ', result);
};

module.exports.questionIdReport = async function(id) {
  const result = await DB.poolQuery(`UPDATE questions SET reported = reported + 1 WHERE id = ${id}`);

  console.log('Result: ', result)
}