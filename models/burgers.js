// Methods required to modify ORM while using burgers_db

var orm = require("../config/orm.js");

var burger = {
	all:function(callback) {
		orm.all("burgers", function(res){
			callback(res);
		})
	}
}

module.exports = burger;
