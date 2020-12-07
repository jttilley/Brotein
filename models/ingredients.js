const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IngredientsSchema = new Schema({
  model: {type: String},
  pk: {type: Number},
  fields: {
    license: {type: Number},
    license_author: {type: String},
    status: {type: String},
    language: {type: Number},
    creation_date: {type: String},
    update_date: {type: String},
    name: {type: String},
    energy: {type: Number},
    protein: {type: String},
    carbohydrates: {type: String},
    carbohydrates_sugar: {type: String},
    fat: {type: String},
    fat_saturated: {type: String},
    fibres: {type: String},
    sodium: {type: String}
  }
});

const Ingredients = mongoose.model('Ingredients', IngredientsSchema);

module.exports = Ingredients;