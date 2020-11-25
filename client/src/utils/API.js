import axios from "axios";
const initUrl = "https://wger.de/api/v2/";

export default {
  getExercises: function() {
    return axios.get(initUrl + "exerciseinfo/?language=2&limit=224");
  },
  getIngredients: function() {
    return axios.get(initUrl + "ingredient");
  }
}
