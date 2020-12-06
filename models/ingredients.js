const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ingredientsSchema = new Schema({
  model: {type: String},
  pk: {type: Number},
  fields: {
    license: {type: String},
    license_author: {type: String},
    status: {type: Number},
    language: {type: Number},
    creation_date: {type: String},
    update_date: {type: String},
    name: {type: String},
    energy: {type: Number},
    protein: {type: Number},
    carbohydrates: {type: Number},
    carbohydrates_sugar: {type: Number},
    fat: {type: Number},
    fat_saturated: {type: Number},
    fibres: {type: Number},
    sodium: {type: Number}
  }
  
});

const Ingredients = mongoose.model('Ingredients', ingredientsSchema);

module.exports = Ingredients;