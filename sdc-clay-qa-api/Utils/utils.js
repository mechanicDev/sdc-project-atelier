const { client, pool} = require('../database/index.js');

module.exports.questionsIdAnswers = async function(id) {
  let result = {};

  const questionsData = await client.query(`SELECT * FROM answers WHERE question_id = ${id}`);
  // console.log('This is the questionsData: ', questionsData);

  let photoUrls = [];
  for(let i = 0; i < questionsData.length; i++) {
    let current = questionsData[i];
    // console.log('Current: ', current)
    let result = await client.query(`SELECT * FROM answers_photos WHERE answer_id = ${current.id}`);
    questionsData[i].photos = result;
  }
  client.end();
  // console.log('Result: ', questionsData)
  return questionsData;
};

module.exports.questionsIdHelpful = async function(id) {
  const result = await client.query(`UPDATE questions SET helpful = helpful + 1 WHERE id = ${id}`);
};

module.exports.answersIdHelpful = async function(id) {
  const result = await client.query(`UPDATE answers SET helpful = helpful + 1 WHERE id = ${id}`);
};

module.exports.answersIdReported = async function(id) {
  const result = await client.query(`UPDATE answers SET reported = reported + 1 WHERE id = ${id}`)
};

//////////////////////////////////////////////
// Get all questions for a given product ID //
//////////////////////////////////////////////

module.exports.questionsId = async function (id, page, count) {
  try {
    const results = await client.query(`SELECT * FROM questions WHERE product_id = ${id};`);
    return results.rows;
  } catch (err) {
    console.log('DB Query error');
    return err
  }
};

///////////////////////////////
// Post a question to the DB //
///////////////////////////////

// Need to make this unique.... //

module.exports.questionsPost = async function (body, name, email, product_id, date) {
  if (!date) {
    date = Date.now();
    console.log('Date: ', date);
  }

  try {
    product_id = parseInt(product_id);

    const insertQuery = `INSERT INTO questions(product_id, body, date_written, asker_name, asker_email, reported, helpful)VALUES(${product_id}, '${body}', ${date}, '${name}', '${email}', 0, 0)`

    const results = await client.query(insertQuery);
    return results.rows;

  } catch (err) {
    console.log('Question not inserted.');
    return err;
  }
};


///////////////////////
// Report a question //
///////////////////////

module.exports.questionIdReport = async function(question_id) {
  const result = await client.query(`UPDATE questions SET reported = reported + 1 WHERE id = ${question_id}`);
  console.log('Result: ', result.rows);
}