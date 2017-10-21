var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

/* GET home page. */
router.get('/join', function(req, res, next) {
    res.render('signUp', { title: 'Express' });
});

router.post('/submission', function(req, res, next) {
    console.log("worked");
    console.log(req.body.email);
    res.render('options', { title: 'Express' });
});


module.exports = router;