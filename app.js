var express = require('express');
var fs = require('fs');


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

var fileContents = fs.readFile(__dirname + '/public/data.txt', function(err, data){
	app.get('/', function(req, res) {
		res.header('Content-Type', 'text/html');
		res.send(data);
	});
});

var server = app.listen(4541, function() {
	console.log('Express server listening on port ' + server.address().port);
});
