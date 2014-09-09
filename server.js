//Get the express Package
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var expressValidator = require('express-validator');
var Momo = require('./models/momo');


mongoose.connect('mongodb://localhost:27017/MomoDb');


//Create a Express Application
var app = express();

//Use the body-parser package in our application
app.use(bodyParser.urlencoded({
extended: true
}));

//Use Env defined port or 3000
var port= process.env.PORT || 3000;

//Create Express Router
var router = express.Router();

router.route('/momos')
	.post(momoController.postMomos)
	.get(momoController.getMomos);

router.route('/momos/:momo_id')
	.get(momoController.getMomo)
	.put(momoController.putMomo)

//Register all routes with /api
app.use('/api', router);

//Start the server
app.listen(port);
console.log("Listening Momo on Port:" + port);

