const express = require('express');
const path = require('path');
const router = express.Router();

const user_controller = require('../controllers/userController');

router.get('/list', user_controller.user_list);

module.exports = router;