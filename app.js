// *** main dependencies *** //
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
//var RedisStore = require('connect-redis')(express.session);
//var REDIS_URL = process.env.REDISCLOUD_URL || "redis://localhost";
// *** routes *** //
var routes = require('./routes/index.js');

// *** express instance *** //
var app = express();

var server = require('http');


//Allow cross origin
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Request-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    
    next();
});

// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// *** main routes *** //
app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


var options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

// server.createServer(options,app).listen(7777, "192.168.200.68" , function(){
//   console.log("Server listning on https://92.168.200.68:7777");
// });

server.createServer(app).listen(7777, "192.168.200.68" , function(){
  console.log("Server listning on https://92.168.200.68:7777");
});