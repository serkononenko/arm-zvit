const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const dir = require('../dirname').rootDir;

const profile_controller = require('../controllers/profileController');

router.use(express.static(dir + '/view/dist/'));
router.use(bodyParser.text());

router.get('/:id', (req, res) => {
    if (req.accepts('application/json')) {
        console.log('data');
        profile_controller.user_profile(req, res);
    }
    console.log('page');
    res.sendFile(path.dirname( __dirname) + '/view/dist/index.html');
});

router.post('/:id/*', profile_controller.user_profile_update);

module.exports = router;