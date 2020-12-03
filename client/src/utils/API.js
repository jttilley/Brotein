import axios from "axios";
const initUrl = "https://wger.de/api/v2/";

export default {
    //////// get exercise and ingredient API routes//////////
    getExercises: function() {
      return axios.get(initUrl + "exerciseinfo/?language=2&limit=224");
    },
    getIngredients: function() {
      return axios.get(initUrl + "ingredient");
    }, 
    ////////////////////// Meal routes ////////////////////// 
    getMeal: function(id) {
      return axios.get("/api/meal/" + id);
    },
    getAllMeals: function() {
      return axios.get("/api/allmeals");
    },
    postMeal: function() {
      return axios.post("/api/meal/submit");
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
    ////////////////////// Workout routes ////////////////////// 
    getWorkout: function(id) {
      return axios.get("/api/workout/" + id);
    },
    getAllWorkouts: function() {
      return axios.get("/api/allworkouts");
    },
    postWorkout: function() {
      return axios.post("/api/workout/submit");
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
    ////////////////////// User routes ////////////////////////
    login: function (loginInfo) {
      return axios.post('/api/users/login', loginInfo);
    },
    signup: function (signupInfo) {
      return axios.post('/api/users/signup', signupInfo);
    },
    isLoggedIn: function () {
      return axios.get('/api/users/profile');
    },
    logout: function () {
      return axios.get('/api/users/logout');
    },
  };
