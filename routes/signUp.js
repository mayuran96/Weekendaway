var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/join', function(req, res, next) {
    res.render('signUp', { title: 'Express' });
});

router.get('/submission', function(req, res, next) {
    res.render('menu', { title: 'Express' });
});


module.exports = router;