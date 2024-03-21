const express = require('express');
const router = express.Router();
const controller = require('../controller/Package/controller');

router.get('/packagess', controller.getPackage);
router.post('/createpackages', controller.addPackage);
router.post('/updatepackages', controller.updatePackage);
router.post('/deletepackages', controller.deletePackage);

module.exports = router;