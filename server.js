const express = require('express');
const app = express();
const fs= require('fs');
const path = require('path')
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const accessControl = require('./middleware/accessControl');
const createDb = require('./utils/dbSetting');

const loginRouter = require('./routes/login');
const registrationRouter = require('./routes/registration');
const departmentRouter = require('./routes/department');
const userRouter = require('./routes/user');
const profileRouter = require('./routes/profile');

createDb();
const logStream = fs.createWriteStream(path.join(__dirname, './logs/', 'main-log.log'), {flags: 'a'});

app.use(helmet());
app.use(morgan('short', {stream: logStream}));
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
  console.log("ARM-ZVIT Server listening on 3000 port");
});