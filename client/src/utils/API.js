import axios from "axios";
const initUrl = "https://wger.de/api/v2/";

export default {
  getExercises: function() {
    return axios.get(initUrl + "exerciseinfo/?language=2&limit=224");
  },
  getIngredients: function() {
    return axios.get(initUrl + "ingredient");
  }, 
  // logs in user
  login: function (loginInfo) {
    return axios.post('/api/users/login', loginInfo);
  },

  signup: function (signupInfo) {
    return axios.post('/api/users/signup', signupInfo);
  },

  isLoggedIn: function () {
    return axios.get('/api/users/home');
  },

  logout: function () {
    return axios.get('/api/users/logout');
  },
}
