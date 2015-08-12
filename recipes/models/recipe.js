/* Recipe
	This file exports the model for Recipe.
	
	Author: Aneesa Awaludin
*/

var mongoose = require('mongoose');

// Schema
// _id will be automatically created
var recipeSchema = new mongoose.Schema({
	name: String,
	steps: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'RecipeStep'
	}]
});

// model
var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;