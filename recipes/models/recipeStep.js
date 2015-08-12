/* Recipe Step
	This file exports the model for Recipe Step
	
	Author: Aneesa Awaludin
*/

var mongoose = require('mongoose');

// Schema
// _id will be automatically created
var recipeStepSchema = new mongoose.Schema({
	position: Number,
	step: String
});

// model
var RecipeStep = mongoose.model('RecipeStep', recipeStepSchema);

module.exports = RecipeStep;