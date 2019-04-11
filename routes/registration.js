const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

router.post('/', user_controller.register_user);

module.exports = router;