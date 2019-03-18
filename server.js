const express = require('express');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const helmet = require('helmet');
const bodyParser = require('body-parser');
const createDb = require('./dbSetting');

const loginRouter = require('./routes/login');
const registrationRouter = require('./routes/registration');
const departmentRouter = require('./routes/department');
const userRouter = require('./routes/user');
const profileRouter = require('./routes/profile');

createDb();

app.use(session({
  secret: 'foo',
  saveUninitialized: false,
  resave: false, 
  store: new MongoStore({
    url: 'mongodb://localhost/arm-zvit'
  })
}));

app.use(helmet());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(__dirname + '/view/dist/'));

app.use('/login', loginRouter);
app.use('/registration', registrationRouter);
app.use('/department', departmentRouter);
app.use('/user', userRouter);
app.use('/profile', profileRouter);

app.listen(3000, ()=> {
  console.log("ARM-ZVIT Server listening on 3000 port");
});