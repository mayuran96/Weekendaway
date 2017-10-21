var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/navToMenu', function(req, res, next) {
    res.render('menu', { title: 'Menu' });
});

module.exports = router;