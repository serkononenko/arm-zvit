const express = require('express');
const path = require('path');
const router = express.Router();

const user_controller = require('../controllers/userController');

router.get('/', (req, res) => {
    res.sendFile(path.dirname( __dirname) + '/view/dist/index.html');
})

router.get('/list', user_controller.user_list);

module.exports = router;