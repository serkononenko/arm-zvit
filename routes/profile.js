const express = require('express');
const dir = require('../dirname').rootDir;
const router = express.Router();

const user_controller = require('../controllers/userController');

router.use(express.static(dir + '/view/dist/'));
/*
router.get('/', (req, res) => {
    res.sendFile(path.dirname( __dirname) + '/view/dist/index.html');
})
*/

router.get('/*', user_controller.user_profile);

router.post('/*', user_controller.user_profile_update);

module.exports = router;