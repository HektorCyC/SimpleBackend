'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    user: String,
    postBody: String
});

module.exports = mongoose.model('Post', ProjectSchema);