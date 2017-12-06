var express = require("express");
var router = express.Router();


// Sets up initial home/index route
// =============================================================
router.get("/", function(req, res){
	res.render("index");
})