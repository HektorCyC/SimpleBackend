'use strict'

var Model = require('../models/project');


var controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: 'Hola mundo'
        })
    },
    apiGET: function (req, res) {
        return res.status(200).send({
            message: 'Hola mundo'
        })
    },
    apiPOST: function (req, res) {
        var model = Model();
        var params = req.body;

        model.user = params.user;
        model.postBody = params.postBody;

        model.save((err, projectStored) => {
            if(err) return res.status.send({message: 'Error storing the item into the DB'});
            if(!projectStored) return res.status(404).send({message: 'Cannot save the item'});

            return res.status(200).send({message: 'Item saved on DB'});
        });
    },
    apiPUT: function (req, res) {
        return res.status(200).send({
            message: 'Hola mundo'
        })
    },
    apiDELETE: function (req, res) {
        return res.status(200).send({
            message: 'Hola mundo'
        })
    },
};

module.exports = controller;