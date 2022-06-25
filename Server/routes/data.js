var express = require('express');
var router = express.Router();
var path = require('path');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(path.join(__dirname, '../Data/test.db'));

router.get('/', function(req, res, next) {

    db.get('select info from lorem where rowid = ?', req.query.row_id, function(err, data) {
        if (err) {
         logger.winston.error(err);
        } else {
         res.status(200).json({
            'data' : data,
            'name' : req.query.name,
            'anotherField' : { 'subName' : 'blabla', 'rowid' : req.query.row_id}
         });
        }
    });

  /*     
  res.json({
    'name' : 'John'
  });*/
});

router.get('/:id/:name', function(req, res, next) {
    
    db.get('select rowid, info from lorem where rowid = ?', req.params.id, function(err, data) {
        if (err) {
         logger.winston.error(err);
        } else {
         res.status(200).json({
            'info' : data.info,
            'name' : req.params.name,
            'anotherField' : { 'subName' : 'blabla', 'rowid' : data.rowid}
         });
        }
    });
});

router.post('/', function(req, res, next) {
	var user_name = req.body.user;
	var password = req.body.password;
	console.log('User name = ' + user_name + ', password is ' + password);

    db.run('insert into lorem(info) values(?)', [user_name + '/' + password], function(err) {
        if (err) {
         logger.winston.error("Error inserting a new record");
        } else {
         res.status(200).json({ status: 'success', message: 'Inserted', text: 'bububu' });
        }
       });
});

module.exports = router;
