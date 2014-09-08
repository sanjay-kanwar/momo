//Load required packages
var mongoose = require('mongoose');

//Define our momo schema
var MomoSchema = new mongoose.Schema({
	name:String,
	type:String,
	quantity:Number	
});

//Export the mongoose model
module.exports = mongoose.model('Momo', MomoSchema);
