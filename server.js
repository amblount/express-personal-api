// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! This is an interactive map of Oakland, where you can create a neighborhood and mark it on the map.",
    documentationUrl: "https://github.com/amblount/express-personal-api/NeighborhoodsAPI.md", // CHANGE ME
    baseUrl: "https://oakland-neighborhoods.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"},
      {method: "GET", path: "/api/neighborhoods", description: "View all neighborhoods"},
      {method: "GET", path: "/api/neighborhoods/:id", description: "View one neighborhood"},
      {method: "POST", path: "/api/neighborhoods", description: "Create a new neighborhood"},
      {method: "PUT", path: "/api/neighborhoods/:id", description: "Edit an existing neighborhood"},
      {method: "DELETE", path: "/api/neighborhoods/:id", description: "Destroy an existing neighborhood"},
    ]
  })
});

// show profile page
app.get('/api/profile', function api_profile(req, res) {
  res.json(profile)
})

// neighborhoods index
app.get('/api/neighborhoods', function api_profile(req, res) {
  res.json(neighborhoods)
})

// neighborhoods show
app.get('/api/neighborhoods/:id', function api_profile(req, res) {
  db.Neighborhoods.findOne({_.id req.params._id }, function(err, data) {
    res.json(data)
  })
})

// neighborhoods create
app.post('/api/neighborhoods/:id', function api_profile(req, res) {
  // create a new neighborhood with form data
  var newNeighborhood = new db.Neighborhood({
    name: req.body.name,
    description: req.body.description
  });
  // save newNeighborhood to datadase
  newNeighborhood.save(err, neighborhood){
    if(err){
      return console.log('save error:' + err)
    }
    console.log('saved',neighborhood.name );
    // send back the Neighborhood
    res.json(neighborhood)
  }
})

// neighborhoods update
app.put('/api/neighborhoods/:id', function api_profile(req, res) {
  res.json({

  })
})

// neighborhoods delete
app.delete('/api/neighborhoods/:id', function api_profile(req, res) {
  res.json({

  })
})




/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000);
