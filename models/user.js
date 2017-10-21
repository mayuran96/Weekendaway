var mongoose = require('mongoose');

// User schema
var userSchema = mongoose.Schema({
    email: String,
    password: String,
    departures: [{
        state: String,
        city: String
    }],
    destination: [{
        state: String,
        city: String
    }]
});

var User = module.exports = mongoose.model('User', userSchema);