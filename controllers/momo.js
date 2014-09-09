
var Momo = require('../models/momo');
//Create a new Instance of the Momo Model
exports.postMomos = function(req,res){
	var momo = new Momo();

	//Set the beer properties that came from the POST data
	momo.name = req.body.name;
	momo.type = req.body.type;
	momo.quantity = req.body.quantity;

	//Save the beer and check for errors
	momo.save(function(err){
	if(err)
	 res.send(err)

	res.json({message: "Momo added to the plate", data:momo});
}):
};

//Create endpoint /api/momos for GET
exports.getMomos = function(req,res){

	Momo.find(function(err,momos){
	 
	if(err)
	res.send(err);

	res.json({message:"Momos has been found in the store", data: momos});
});
};


//Create endPoint for single momo
exports.getMomo = function(req,res){
	var momoId = req.params.momo_id;
	Momo.findById(momoId, function(err, momo){
	if(err)
	res.send(err);
	res.json({message:'One momo has been found', data:momo});
});
}:

//Upate a momo Object
exports.putMomo = function(req,res){
	
	Momo.findById(req.params.momo_id, function(err, momo){

	//update the momo quantity
	momo.quantity = req.body.quantity;
	
	//Save the updated momo
	momo.save(function(err){
	if(err)
		res.send(err);

	res.json(momo);
});
});
};




