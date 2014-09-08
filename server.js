//Get the express Package
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
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

//Initial route
router.get('/', function(req,res){
	res.json({message:"You are runing short of momo. Please order some more"})
});

var momoRoute = router.route('/momos');

momoRoute.post(function(req,res){
	var momo = new Momo();
	momo.name = req.body.name;
	momo.type = req.body.type;
	momo.quantity = req.body.quantity;

	momo.save(function(err){
	if(err){
	res.send(err);
	}
	res.json({message: "Momo added to the plate", data:momo});
	});
});

//Create endpoint /api/momos for GET
momoRoute.get(function(req,res){
		Momo.find(function(err, momos){
	if(err)
	res.send(err);
	res.json(momos);
});
});

//Get one Momo
var singleMomoRoute = router.route('/momos/:momo_id');

singleMomoRoute.get(function(req,res){
	var momo = req.params.momo_id;

	Momo.findById(req.params.momo_id, function(err, momo){
	if(err)
	res.send(err);

	res.json(momo);
	});
});

singleMomoRoute.delete(function(req,res){
	Momo.findByIdAndRemove(req.params.momo_id, function(err){
	if(err)
	res.send(err);
	
	res.json({message: "Momo has been removed from the plate"});
});
});
//Register all routes with /api
app.use('/api', router);

//Start the server
app.listen(port);
console.log("Listening Momo on Port:" + port);

