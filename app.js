'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Routing files
var project_routes = require('./routes/routes');

// Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Routing
app.use('/', project_routes);


// Exports
module.exports = app;