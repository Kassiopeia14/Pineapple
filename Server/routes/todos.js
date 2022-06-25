var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {

	var d = req.body;	
	
	console.log('body in /todos: ' + d);
	res.json({
		data: d
		//text: 'TODO is succesfull: ' + JSON.stringify(data)
	});
});

router.post('/text', function(req, res, next){
	console.log('req.body abc: ' + req.body.abc)
	console.log('req.body buba: ' + req.body.buba)

	console.log('body in /todos/text: ' + JSON.stringify(req.body))
	res.sendStatus(200)
})

module.exports = router; 