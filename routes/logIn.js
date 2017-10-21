var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

/* GET home page. */
router.get('/signIn', function(req, res, next) {
    res.render('logIn', { title: 'Log in' });
});

router.post('/submission', function(req, res, next) {
    console.log("worked");
    console.log(req.body.email);
    res.render('menu', { title: 'Express' });
});


module.exports = router;