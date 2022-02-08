const axios = require('axios')


let testRoute = () => {
  return axios({
    method: 'GET',
    url: 'http://localhost:5050/',
  })
  .then(e =>{
    console.log('Hello', e.data)
    return e.data
  })
  .catch(err => err)
}

test('Should hit my base route', () => {
  return testRoute().then(data => {
    expect(data).toBe('You know it');
  })
})


test('Testing Jest', () => {
  expect(9).toEqual(9);
})

