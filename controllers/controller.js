'use strict'

var Model = require('../models/project');


var controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: 'Read the documentation at the GitHub Repository'
        })
    },
    apiGET: function (req, res) {
        var docId = req.params.id;

        if (docId == null) return res.status(500).send({ message: 'ID required' });

        Model.findById(docId, (err, document) => {
            if (err) return res.status(500).send({ message: 'Error retriving the item' });
            if (!document) return res.status(404).send({ message: 'Error retriving the item' });
            return res.status(200).send({ message: document });

        });
    },
    apiGETAll: function (req, res) {
        Model.find({}).exec((err, documents) => {
            if (err) return res.status(500).send({ message: 'Error retriving data' });
            if (!documents) return res.status(404).send({ message: 'No documents to list' });
            return res.status(200).send({ documents });
        });
    },
    apiPOST: function (req, res) {
        var model = Model();
        var params = req.body;

        model.user = params.user;
        model.postBody = params.postBody;
        model.title = params.title;

        model.save((err, documentStored) => {
            if (err) return res.status(500).send({ message: 'Error storing the item into the DB' });
            if (!documentStored) return res.status(404).send({ message: 'Cannot save the item' });

            return res.status(200).send({ message: 'Item saved on dB', itemDetails: documentStored });
        });
    },
    apiPUT: function (req, res) {
        var docId = req.params.id;
        var newData = req.body;

        if (docId == null) return res.status(500).send({ message: 'ID required' });

        Model.findByIdAndUpdate(docId, newData, {new:true}, (err, docUpdated) => {
            if (err) return res.status(500).send({ message: 'Error updating the item' });
            if (!docUpdated) return res.status(404).send({ message: 'Item not able to update check the id.' });

            return res.status(200).send({ message: 'Updated successfully', updatedItem: docUpdated })
        });

    },
    apiDELETE: function (req, res) {
        var docId = req.params.id;

        Model.findByIdAndDelete(docId, (err, removed) => {
            if (err) return res.status(500).send({ message: 'Error deleting the item' });
            if (!removed) return res.status(404).send({ message: 'Item not found, check the id.' });

            return res.status(200).send({message: 'Deleted successfully'});
        })
    },
};

module.exports = controller;