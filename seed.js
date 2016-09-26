// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

db.Neighborhood.remove({}, function(err, neighborhood){
  console.log('removed all neighborhoods');
  if (err) {
    console.log(err);
    return;
  }
})

var neighborhoods = [
  {name: "Bella Vista", description: "East of lake Merritt"},
  {name: "Uptown", description: "downtown Oakland, 12th Street Bart"},
  {name: "China Town", description: "Between East Lake + Downtown"},
  {name: "Grand Lake", description: "Above Lakeshore or near the theatre"},
  {name: "Temescal", description: "North Oakland"},
  {name: "Fruitvale", description: "Fruitvale Bart Station, 1st East oakland community"},
  {name: "Montclair", description: "near highway 13"},
  {name: "San Antonio", description: "An East Lake community"},
  {name: "Glenview", description: "East"},
  {name: "East Peralta", description: "West Oakland"}
]

neighborhoods.forEach(function(neighborhoodData){
  var nh =  new db.Neighborhood({
    name: neighborhoodData.name,
    description: neighborhoodData.description
  });

  nh.save(function(err){
    if(err) { return console.log(err) };
  });

})

process.exit();

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
