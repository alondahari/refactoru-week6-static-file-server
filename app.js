var express = require('express');
var fs = require('fs');

var fileContents = fs.readFileSync(__dirname + '/public/data.txt');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.header('Content-Type', 'text/html');
	res.send(fileContents);
	// res.render('index');
});

var server = app.listen(4541, function() {
	console.log('Express server listening on port ' + server.address().port);
});
