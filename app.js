'use strict'

var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

var app = express();
app.use(cors());

// Routing files
var project_routes = require('./routes/routes');

// Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
 });
 
 

// Routing
app.use('/', project_routes);


// Exports
module.exports = app;