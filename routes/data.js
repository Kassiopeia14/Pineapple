var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next) {
	res.json({'name': 'kas', 'age': 23});
});

module.exports = router;
