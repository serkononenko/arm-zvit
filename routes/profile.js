const express = require('express');
const dir = require('../dirname');
const router = express.Router();

const user_controller = require('../controllers/userController');

router.use(express.static(dir + '/view/dist/'));

router.get('/', (req, res) => {
    res.sendFile(path.dirname( __dirname) + '/view/dist/index.html');
})

router.get('/user', user_controller.user_profile);

module.exports = router;