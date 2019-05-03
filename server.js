require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const accessControl = require('./middleware/accessControl');
const createDb = require('./utils/dbSetting');
const logStream = require('./utils/Log');

const apiRouter = require('./routes/api');

createDb();

app.use(helmet()); //  for secure Express apps by setting various HTTP headers
app.use(bodyParser.text());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors()); // enabling CORS for all requests
app.use(morgan('common', {stream: logStream('main.log')}));


app.use(express.static(path.join(__dirname, 'view', 'dist')));
app.use('/administrator', express.static(path.join(__dirname, 'view', 'dist')));
app.use('/profile', express.static(path.join(__dirname, 'view', 'dist')));
app.use('/department', express.static(path.join(__dirname, 'view', 'dist')));

app.use(accessControl);

app.use('/api', apiRouter);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'view', 'dist', 'index.html'));
});


app.listen(PORT, ()=> {
    console.log('ARM-ZVIT Server listening on '+ PORT +' port');
});