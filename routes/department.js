const express = require('express');
const router = express.Router();

const department_controller = require('../controllers/departmentController');

router.get('/list', department_controller.department_list);

module.exports = router;