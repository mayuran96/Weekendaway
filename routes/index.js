var express = require('express');
var API = require('qpx-express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getPrices',function (req, res){
    var apiKey = 'AIzaSyDIn4EE34osdsyJQxzFrSEqmvzUtL7TRFI';
    var qpx = new API(apiKey);

    var body = {
        "request": {
            "passengers": {
                "adultCount": 1
            },
            "slice": [
                {
                    "origin": "BOS",
                    "destination": "LAX",
                    "date": "2018-03-12"
                }
            ],
        }
    };
    qpx.getInfo(body, function(error, data){
        console.log(data.trips.data.airport[0].name);
    });
});



module.exports = router;
