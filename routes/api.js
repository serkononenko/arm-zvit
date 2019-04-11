const express = require('express');
const router = express.Router();

const loginRouter = require('./login');
const registrationRouter = require('./registration');
const departmentRouter = require('./department');
const userRouter = require('./user');
const profileRouter = require('./profile');
const administratorRouter = require('./administrator');

router.use('/login', loginRouter);
router.use('/registration', registrationRouter);
router.use('/department', departmentRouter);
router.use('/user', userRouter);
router.use('/profile', profileRouter);
router.use('/administrator', administratorRouter);


module.exports = router;