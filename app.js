var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var expressValidator = require('express-validator');

var index = require('./routes/index');
var users = require('./routes/users');
var tickets = require('./routes/tickets');
var signUp = require('./routes/signUp');


var app = express();

// Mongoose setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TempDatabase');
var db = mongoose.connection;

// Get the user schema
let User = require('./models/user');

db.once('openUri', function() {
  console.log('Connected to MongoDB');
})

db.on('error', function(err) {
  console.log("Errors: ");
  console.log(err);
});

// End Mongoose setup

// Test directory
app.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      console.log("Database error");
      console.log(err);
    } else {
      res.send(JSON.stringify(users));
    }
  });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/tickets',tickets);
app.use('/signUp',signUp);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
app.listen(3000);