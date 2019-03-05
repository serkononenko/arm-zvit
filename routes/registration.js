const path = require('path');
const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

router.post('/', user_controller.register_user);

router.get('/', (req, res) => {
    res.sendFile(path.dirname( __dirname) + '/view/dist/index.html');
})

module.exports = router;