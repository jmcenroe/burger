// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var mysql = require("mysql");
var connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	database:"burgers_db"
})

connection.connect(function(err){
	if(err)throw err;
	console.log("connected as id: " + connection.threadid);
});

// Exports the connection for other files to use
module.exports = connection;