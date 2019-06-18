'use strict'

var mongodblink = require('./dbconnect');

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect(mongodblink).then(() => {
    console.log('Conexion a MongoAtlas establecida');
    app.listen(port, () => {
        console.log('Servidor corriendo en el puerto: ' + port);
    });
}).catch(err => {
    console.log(err);
});

