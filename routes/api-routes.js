
module.exports = function (app) {

  app.get('/api/test', function (req, res) {
    console.log('Hello');
  });


  app.post('/api/test', function (req, res) {
    console.log('test');
  });

}

// curl -X GET https://wger.de/api/v2/workout/ \
// -H 'Authorization: Token 1b15085e5cec40fe0d991de3399ccafb7e19d59a'