const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer(); // for parsing multipart/form-data
const createDb = require('./db/setting');
const regUser = require('./db/userBaseChema');

createDb();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('D:/play0rdie/web-projects/arm-zvit/front-end/dist/'));

app.post('/registration', upload.array(), (req, res) => {
    if(!req.body) return res.sendStatus(400);
    regUser(req.body);
});

app.post('/login', upload.array(), (req, res) => {
    if(!req.body) return res.sendStatus(400);
    
});

app.listen(3000, ()=> {
    console.log("ARM-ZVIT Server listening on 3000 port");
});