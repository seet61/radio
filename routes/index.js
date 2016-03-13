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
  db.get_category(config.get('Radio.dbConfig.connectionString'), function(categories){
    //console.log('callback ' + categories[0].title);
    db.get_countries(config.get('Radio.dbConfig.connectionString'), function(countries){
      //console.log('callback ' + countries[0].rus_name);
      res.render('index', { categories: categories, countries: countries });
    });
  });

});

router.post('/streams', function(req, res, next) {
  //console.log('request body ' + req.body);
  //console.log(req.body.category_id);
  //console.log(req.body.country_code);
  db.get_streams(config.get('Radio.dbConfig.connectionString'), req.body.category_id, req.body.country_code, function(stations){
    //console.log('callback ' + stations[0].title);
    res.render('streams', { stations: stations });
  });
});

module.exports = router;
