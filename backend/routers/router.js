const express = require('express');
const router = express.Router();
const controller = require('../controller/Destination Manager/controller');

router.get('/destination', controller.getDestination);
router.post('/createdestination', controller.addDestination);
router.post('/updatedestination', controller.updateDestination);
router.post('/deleteDestination', controller.deleteDestination);

module.exports = router;