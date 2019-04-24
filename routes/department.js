const express = require('express');
const router = express.Router();

const department_controller = require('../controllers/departmentController');

router.get('/', department_controller.department_list);

router.get('/:id', department_controller.department_profile);

router.post('/', department_controller.department_create);

module.exports = router;