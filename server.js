const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const accessControl = require('./middleware/accessControl');
const createDb = require('./utils/dbSetting');
const logStream = require('./utils/Log');

const loginRouter = require('./routes/login');
const registrationRouter = require('./routes/registration');
const departmentRouter = require('./routes/department');
const userRouter = require('./routes/user');
const profileRouter = require('./routes/profile');

createDb();


app.use(helmet());
app.use(morgan('short', {stream: logStream('main.log')}));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, '/view/dist/')));

app.use(accessControl);

app.use('/login', loginRouter);
app.use('/registration', registrationRouter);
app.use('/department', departmentRouter);
app.use('/user', userRouter);
app.use('/profile', profileRouter);

app.listen(3000, ()=> {
    console.log('ARM-ZVIT Server listening on 3000 port');
});