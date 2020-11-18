import axios from "axios";

export default {
  getExercises: function() {
    return axios.get("https://wger.de/api/v2/exercise/?language=2");
  },
  getIngredients: function() {
    return axios.get("https://wger.de/api/v2/ingredient");
  }
}
