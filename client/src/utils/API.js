import axios from "axios";

export default {
  getExercises: function() {
    return axios.get("https://wger.de/api/v2/exercise");
  },
  getIngredients: function() {
    return axios.get("https://wger.de/api/v2/ingredients");
  }
}
