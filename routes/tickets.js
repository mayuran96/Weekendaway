var express = require('express');
var router = express.Router();
var API = require('qpx-express');

//map that stores all the different ticket prices
var map = new Array();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/destinations',function (req, res){
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 14);//checks prices for two weeks in advance
    var dd = currentDate.getDate();
    var mm = currentDate.getMonth()+1;
    var yyyy = currentDate.getFullYear();
    if(dd<10){
        dd='0'+dd;
    }
    if(mm<10){
        mm='0'+mm;
    }
    var departureDate = yyyy+"-"+mm+"-"+dd;
    currentDate.setDate(currentDate.getDate() + 2);
    dd = currentDate.getDate();
    mm = currentDate.getMonth()+1;
    yyyy = currentDate.getFullYear();
    if(dd<10){
        dd='0'+dd;
    }
    if(mm<10){
        mm='0'+mm;
    }
    var returnDate = yyyy+"-"+mm+"-"+dd;//provides a return date that is 2 days later
    console.log(departureDate);
    console.log(returnDate);
    //var apiKey = 'AIzaSyDIn4EE34osdsyJQxzFrSEqmvzUtL7TRFI';
    //var qpx = new API(apiKey);
    //two slice trips represent roundtrip flight costs
    /*var vac1 = {
        "request": {
            "passengers": {
                "adultCount": 1
            },
            "slice": [
                {
                    "origin": "BOS",
                    "destination": "LAX",
                    "date": yyyy+"-"+mm+"-"+dd",
                    "maxStops":0
                },
                {
                    "origin": "LAX",
                    "destination": "BOS",
                    "date": "2018-03-12",
                    "maxStops":0
                },

            ],
            "maxPrice": "USD500",
            "saleCountry": "US",
            "refundable": false,
            "solutions": 500
        }

    };
    qpx.getInfo(vac1, function(error, data){
        //map["LAX"] = data.trips.tripOption[0].pricing[0].saleTotal;
        map["LAX"] = 40;
    });
    console.log("LAX "+map["LAX"]);
    var vac2 = {
        "request": {
            "passengers": {
                "adultCount": 1
            },
            "slice": [
                {
                    "origin": "BNA",
                    "destination": "LAX",
                    "date": "2018-03-12",
                    "maxStops":0
                },
                {
                    "origin": "LAX",
                    "destination": "BNA",
                    "date": "2018-03-12",
                    "maxStops":0
                }
            ],
            "maxPrice": "USD500",
            "saleCountry": "US",
            "refundable": false,
            "solutions": 500
        }

    };
    qpx.getInfo(vac2, function(error, data){
        map["BNA"] = data.trips.tripOption[0].pricing[0].saleTotal;
    });
    var vac3 = {
        "request": {
            "passengers": {
                "adultCount": 1
            },
            "slice": [
                {
                    "origin": "JFK",
                    "destination": "LAX",
                    "date": "2018-03-12",
                    "maxStops":0
                },

            ],
            "maxPrice": "USD500",
            "saleCountry": "US",
            "refundable": false,
            "solutions": 500
        }

    };
    qpx.getInfo(vac3, function(error, data){
        map["JFK"] = 15;
        map["JFK"] = data.trips.tripOption[0].pricing[0].saleTotal;
    });

    var vac4 = {
        "request": {
            "passengers": {
                "adultCount": 1
            },
            "slice": [
                {
                    "origin": "BNA",
                    "destination": "LAX",
                    "date": "2018-03-12",
                    "maxStops":0
                },

            ],
            "maxPrice": "USD500",
            "saleCountry": "US",
            "refundable": false,
            "solutions": 500
        }

    };
    qpx.getInfo(vac4, function(error, data){
        console.log(data.trips.tripOption[0].pricing[0].saleTotal);
    });
    var vac5 = {
        "request": {
            "passengers": {
                "adultCount": 1
            },
            "slice": [
                {
                    "origin": "BNA",
                    "destination": "LAX",
                    "date": "2018-03-12",
                    "maxStops":0
                },

            ],
            "maxPrice": "USD500",
            "saleCountry": "US",
            "refundable": false,
            "solutions": 500
        }

    };
    qpx.getInfo(vac5, function(error, data){
        console.log(data.trips.tripOption[0].pricing[0].saleTotal);
    });*/
    map.push({departure: 'LAX', return:"XXX", val: 10});
    map.push({name: 'BNA',return:"XXX", val: 3});
    map.push({name: 'JFK', return:"XXX", val: 22});
    map.push({name: 'NWR',return:"XXX", val: 7});
    map.sort(function(a,b) {
        return a.val - b.val;
    });
    console.log(map);
    res.send(map);
});


module.exports = router;

