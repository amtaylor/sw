var gzippo = require('gzippo');
var express = require('express');
var app = express();
var logger = require('morgan');

app.use(logger); //replaces your app.use(express.logger()); 
//app.use(express.logger('dev')); 
app.use(gzippo.staticGzip("" + __dirname + "/app"));
app.listen(process.env.PORT || 5000);