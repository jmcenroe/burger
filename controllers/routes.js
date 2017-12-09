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

router.put("/burgers/update", function(req, res){
	burger.update(req.body.burger_id, function(res){
		console.log(res);
		res.redirect("/");
	});
});

router.post("/burgers/create", function(req, res){
	burger.create(req.body.burger_name, function(res){
		res.redirect();
	})
})

module.exports = router;