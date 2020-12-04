import axios from "axios";
// const initUrl = "https://wger.de/api/v2/";

export default {
  // Meal routes
  getMeal: function(id) {
    return axios.get("/api/meal/" + id);
  },
  getAllMeals: function() {
    return axios.get("/api/allmeals");
  },
  postMeal: function(data) {
    return axios.post("/api/meal/submit",data);
  },
  updateMeal: function(id) {
    return axios.put("/api/updatemeal/" + id);
  },
  deleteMeal: function(id) {
    return axios.delete("/delete/meal/" + id);
  },
  deleteAllMeals: function() {
    return axios.delete("/clearall/meals");
  },

  // Workout routes
  getWorkout: function(id) {
    return axios.get("/api/workout/" + id);
  },
  getAllWorkouts: function() {
    return axios.get("/api/allworkouts");
  },
  postWorkout: function(data) {
    return axios.post("/api/workout/submit", data);
  },
  updateWorkout: function(id) {
    return axios.put("/api/updateworkout/" + id);
  },
  deleteWorkout: function(id) {
    return axios.delete("/delete/workout/" + id);
  },
  deleteAllWorkouts: function() {
    return axios.delete("/clearall/workouts");
  },

  //User routes
  login: function (loginInfo) {
    return axios.post('/api/users/login', loginInfo);
  },

  signup: function (signupInfo) {
    return axios.post('/api/users/signup', signupInfo);
  },

  signin: function (signinInfo) {
    return axios.post('/api/users/signup', signinInfo);
  },

  isLoggedIn: function () {
    return axios.get('/api/users/profile');
  },

  logout: function () {
    return axios.get('/api/users/logout');
  },
}
