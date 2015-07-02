var app = require('express')(); // creates the express object and saves it to 
//app variable

var bodyParser = require('body-parser');

app.use(bodyParser.json());
var port = 8787;
var me = {
	name : 'rob',
	hobbies : ['snowboarding', 'writing code', 'moving on up', 'getting kicked out of places'],
	jobs : {
		title : 'Hibachi Chef',
		date : '2012 - 2013'
	}
};

app.get('/jobs', function(req, res) {
	res.json(me.jobs);
})

app.post('/hobbies', function(req, res) {
	me.hobbies.push(req.body.message);
})


app.listen(port, function() {
	console.log('listening on ' + port);
})


