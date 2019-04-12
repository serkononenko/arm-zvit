require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const accessControl = require('./middleware/accessControl');
const createDb = require('./utils/dbSetting');
const logStream = require('./utils/Log');

const apiRouter = require('./routes/api');

createDb();

app.use(helmet());
app.use(morgan('short', {stream: logStream('main.log')}));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, '/view/dist/')));

app.use(accessControl);

app.use('/api', apiRouter);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'view', 'dist', 'index.html'));
});


app.listen(process.env.PORT, ()=> {
    console.log('ARM-ZVIT Server listening on '+ process.env.PORT +' port');
});