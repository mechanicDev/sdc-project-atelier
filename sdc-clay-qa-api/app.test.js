const supertest = require('supertest');
const app = require('./app.js');


// GET to qa/questions

describe("GET /test", () => {

  describe("Happy Path", () => {

    test("Should get a 200 response from the server", async () => {
      const response = await supertest(app).get("/questions")
      expect(response.statusCode).toBe(200);
    })

  })

  describe("Sad Path", () => {

  })

})
/*
// Get to questions with params :id / answers

describe("GET /test", () => {

  describe("Happy Path", () => {

    test("Should get a 200 response from the server", async () => {
      const response = await supertest(app).get("/test")
      expect(response.statusCode).toBe(200);
    })

  })

  describe("Sad Path", () => {

  })

})

// Put to questions with params :question_id / helpful

describe("GET /test", () => {

  describe("Happy Path", () => {

    test("Should get a 200 response from the server", async () => {
      const response = await supertest(app).get("/test")
      expect(response.statusCode).toBe(200);
    })

  })

  describe("Sad Path", () => {

  })

})


// Put request to answers with params :id / helpful

describe("GET /test", () => {

  describe("Happy Path", () => {

    test("Should get a 200 response from the server", async () => {
      const response = await supertest(app).get("/test")
      expect(response.statusCode).toBe(200);
    })

  })

  describe("Sad Path", () => {

  })

})

// Put request to questions with params :question_id / report

describe("GET /test", () => {

  describe("Happy Path", () => {

    test("Should get a 200 response from the server", async () => {
      const response = await supertest(app).get("/test")
      expect(response.statusCode).toBe(200);
    })

  })

  describe("Sad Path", () => {

  })

})

// Put request to answers with params :amswer_id / report

describe("GET /test", () => {

  describe("Happy Path", () => {

    test("Should get a 200 response from the server", async () => {
      const response = await supertest(app).get("/test")
      expect(response.statusCode).toBe(200);
    })

  })

  describe("Sad Path", () => {

  })

})

// Post request to questions

describe("GET /test", () => {

  describe("Happy Path", () => {

    test("Should get a 200 response from the server", async () => {
      const response = await supertest(app).get("/test")
      expect(response.statusCode).toBe(200);
    })

  })

  describe("Sad Path", () => {

  })

})

*/