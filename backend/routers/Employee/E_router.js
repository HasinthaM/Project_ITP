const express = require('express');
const router = express.Router();
const E_controller = require('../../controller/Employee/E_controller');

router.get('/employee', E_controller.getEmployee);
router.post('/createemployee', E_controller.addEmployee);
router.post('/updateemployee', E_controller.updateEmployee);
router.post('/deleteemployee', E_controller.deleteEmployee);

module.exports = router;