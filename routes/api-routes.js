
module.exports = function (app) {

  app.get('/api/test', function (req, res) {
    console.log('Hello');
  });


  app.post('/api/test', function (req, res) {
    console.log('test');
  });

}