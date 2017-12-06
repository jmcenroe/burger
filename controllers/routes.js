var express = require("express");
var router = express.Router();
var burger = require("../models/burgers.js");

// Sets up initial home/index route
// =============================================================
router.get("/", function(req, res){
	burger.all(function(burger_data){
		console.log(burger_data);
	})
})

module.exports = router;