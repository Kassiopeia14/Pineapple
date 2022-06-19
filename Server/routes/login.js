var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	var user_name = req.body.user;
	var password = req.body.password;
	console.log('User name = ' + user_name + ', password is ' + password);
	res.end('yes');
});

module.exports = router;
