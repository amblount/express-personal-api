var mongoose = require("mongoose");

// connect to mongodb
mongoose.connect("mongodb://localhost/personal-api");

var Neighborhood =  require('./neighborhood');

exports.Neighborhood = Neighborhood;


// // module.exports.Campsite = require("./campsite.js.example");
// module.exports.Neighborhood = require('./neighborhood.js');
