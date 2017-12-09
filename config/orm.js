var connection = require("./connection.js");

// Connection query that allows selecting all table data and passing result to models
// =============================================================
var orm = {
	all: function(tableInput, callback){
		connection.query("SELECT * FROM " + tableInput + ";", function(err, res){
			if(err)throw err;
			callback(res);
		})
	},

	update: function(tableInput, condition, callback){
		connection.query("UPDATE " + tableInput + "SET devoured=true WHERE id="
			+condition+ ";", function(err, res){
				if(err)throw err;
				callback(res);
		})
	},

	create: function(tableInput, val, callback){
		connection.query('INSERT INTO ' +tableInput+" (burger_name)" + 
			"VALUES ('"+val+"');", function(err, res){
			if(err)throw err;
			callback(res);
		})
	}
}

module.exports = orm;