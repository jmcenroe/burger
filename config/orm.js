var connection = require("./connection.js");

// Connection query that allows selecting all table data and passing result to models
// =============================================================
var orm = {
	all: function(tableInput, callback){
		connection.query("SELECT * FROM " + tableInput + ";", function(err, res){
			if(err)throw err;
			callback(res);
		})
	}
}

module.exports = orm;