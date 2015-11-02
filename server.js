//Dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    port = process.env.PORT || 3000,
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    app = express();

//Express Configuration

//Set connection to mongodb
mongoose.connect("mongodb://localhost/MeanMapApp");


//Logging and parsing
app.use(express.static(__dirname + '/public'));  //static location files to public
app.use('/bower_components', express.static(__dirname + '/bower_components')); //use bowercomponents
app.use(morgan('dev')); //log with morgan
app.use(bodyParser.json()); //parse application/json
app.use(bodyParser.urlencoded({extended: true})); //parse application/x-www-form-urlencoded
app.use(bodyParser.text()); //allows bodyParser to look at raw text
app.use(bodyParser.json({ type: 'application/vnd.api+json'})); //parse application/vnd.api+json as json
app.use(methodOverride());

//Routes
//-----------
 require('./app/routes.js')(app);

//Listen
app.listen(port);
console.log('app listening on port ' + port);