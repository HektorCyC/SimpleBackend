'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://adminuser:testadmin@cluster0-3ho0z.mongodb.net/tratotest?retryWrites=true&w=majority').then(() => {
    console.log('Conexion a MongoAtlas establecida');
    app.listen(port, () => {
        console.log('Servidor corriendo en el puerto: ' + port);
    });
}).catch(err => {
    console.log(err);
});

