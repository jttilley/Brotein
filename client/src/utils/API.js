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
      return axios.get("/api/meals/all");
    },
    postMeal: function() {
      return axios.post("/api/meal/add");
    },
    updateMeal: function(id) {
      return axios.put("/api/meal/update/" + id);
    },
    deleteMeal: function(id) {
      return axios.delete("/api/meal/delete/" + id);
    },
    deleteAllMeals: function() {
      return axios.delete("/api/meals/deleteall");
    },
    ////////////////////// Workout routes ////////////////////// 
    getWorkout: function(id) {
      return axios.get("/api/workout/" + id);
    },
    getAllWorkouts: function() {
      return axios.get("/api/workouts/all");
    },
    postWorkout: function() {
      return axios.post("/api/workout/add");
    },
    updateWorkout: function(id) {
      return axios.put("/api/workout/update/" + id);
    },
    deleteWorkout: function(id) {
      return axios.delete("/api/workout/delete/" + id);
    },
    deleteAllWorkouts: function() {
      return axios.delete("/api/workouts/deleteall");
    },
    ////////////////////// User routes ////////////////////////
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
  };
