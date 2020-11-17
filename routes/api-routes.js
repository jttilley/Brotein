
module.exports = function (app) {

  app.get('/api/exercise', function (req, res) {
    console.log('Hello');
    fetch("https://wger.de/api/v2/exercise", {
      method: "GET",
      body: "",
      headers: {
        Authorization: "Token " + WORKOUT_KEY
      }
    })
    .then(response => response.json())
  });

  app.post('/api/test', function (req, res) {
    console.log('test');
  });
}

