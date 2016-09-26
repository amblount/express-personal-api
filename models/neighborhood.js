var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  

var NeighborhoodSchema = new Schema({
  name: String,
  description: String
});

var Neighborhood = mongoose.model('Neighborhood', NeighborhoodSchema);

module.exports = Neighborhood;
