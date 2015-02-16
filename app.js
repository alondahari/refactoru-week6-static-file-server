var express = require('express');
var fs = require('fs');


var app = express();
app.use(express.static(__dirname + '/public'));


app.get('/:filename', function(req, res) {
	var fileContents = fs.readFile(__dirname + '/public/data.txt', function(err, data){
		res.header('Content-Type', 'text/html');
		res.send(req.params.filename);

	});
});

var server = app.listen(4541, function() {
	console.log('Express server listening on port ' + server.address().port);
});
