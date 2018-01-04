//Start the connection and keeps that state along the application
require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


var routes = require('./api/routes');

app.set('port', 80);

app.use(function(req, res, next) {
	console.log(req.method, req.url);
	next(); //goes to the next request
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.use('/api', routes);

var server = app.listen(app.get('port'), function(){
	var port = server.address().port; //pointing to the port given in the arg
	console.log('Magic happend on port ' + port);
});
console.log("Loading...");