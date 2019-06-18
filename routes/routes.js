'use strict'

var express = require('express');
var ProjectController = require('../controllers/controller');

var router = express.Router();


router.get('/', ProjectController.home);
router.get('/api', ProjectController.apiGET);
router.post('/api', ProjectController.apiPOST);

module.exports = router;