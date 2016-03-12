var express = require('express');
var router = express.Router();
var db = require('../modules/db');
var config  = require('config');

router.use(function(req, res, next){
    var date = new Date();
    console.log("Time: ", date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear(), req.method, req.originalUrl);
    next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  var categories = '';
  db.get_category(config.get('Radio.dbConfig.connectionString'), function(results){
    console.log('callback ' + results[0].title);
    res.render('index', { title: 'Test', categories: results });
  });

});

module.exports = router;
