var routes = require('./routes/post.routes');
var alt = require('alt');
var iso = require('iso');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
// where views are located
app.set('views', __dirname+'/views');
// using jade templating
app.set('view engine', 'jade');
// serving static files with help of a built-in middleware in Express - express.static.
app.use(express.static(path.join(__dirname, 'public')));
// body-parser is a piece of express middleware that 
// reads a form's input and stores it as a javascript
// object accessible through `req.body`
// bodyParser.json() Returns middleware that only parses json.
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json 
app.use(bodyParser.json({limit : '50mb'}));
// Parse Cookie header and populate req.cookies with an object keyed by the cookie names
// app.use(cookieParser())
// app.get('/', function(req, res) {
// console.log("Cookies: ", req.cookies)
// })
app.use(cookieParser());

//middleware that is run at the last
app.use(function (req, res) {
	res.render('index');
});

//listen at 8080
app.listen(8080, function () {
    console.log('Listening on localhost:8080');
});