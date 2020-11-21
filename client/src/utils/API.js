import axios from "axios";

export default {
  const initUrl = "https://wger.de/api/v2/"

  getExercises: function() {
    return axios.get(initUrl + "exerciseinfo/?language=2&limit=224");
  },
  getIngredients: function() {
    return axios.get(initUrl + "ingredient");
  }
}
