const { Schema} =require('mongoose');
const { model} =require('mongoose');

const recipeSchema = new Schema({
   title: { type: String, required: true },
   ingredients: { type: String, required: true },
   description: { type: String, required: true },
   
});

const recipes = model('recipe', recipeSchema);

module.exports = recipes;
