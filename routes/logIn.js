var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/signIn', function(req, res, next) {
    res.render('logIn', { title: 'Log in' });
});

router.get('/submission', function(req, res, next) {
    res.render('menu', { title: 'Express' });
});


module.exports = router;