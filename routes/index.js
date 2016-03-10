var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
    var date = new Date();
    console.log("Time: ", date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear(), req.method, req.originalUrl)
    next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express readio example' });
});

module.exports = router;
