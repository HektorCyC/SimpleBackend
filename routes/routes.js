'use strict'

var express = require('express');
var ProjectController = require('../controllers/controller');

var router = express.Router();


router.get('/', ProjectController.home);
router.get('/api', ProjectController.apiGETAll);
router.get('/api/:id?', ProjectController.apiGET);
router.post('/api', ProjectController.apiPOST);
router.put('/api/:id', ProjectController.apiPUT);
router.delete('/api/:id', ProjectController.apiDELETE);

module.exports = router;