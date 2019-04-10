const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const dir = require('../dirname').rootDir;

const profile_controller = require('../controllers/profileController');

router.use(express.static(dir + '/view/dist/'));
router.use(bodyParser.text());

router.get('/:id', profile_controller.user_profile);

router.post('/:id', profile_controller.user_profile_update);

module.exports = router;