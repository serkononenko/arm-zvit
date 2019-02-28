const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer(); // for parsing multipart/form-data
const createDb = require('./db/setting');
const regUser = require('./db/userBaseSchema').regUser;
const logIn = require('./db/userBaseSchema').logIn;
const getDepartmentList = require('./db/departmentListSchema').getDepartmentList;
const addDepartment = require('./db/departmentListSchema').addDepartment;

createDb();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('D:/play0rdie/web-projects/arm-zvit/front-end/dist/'));

app.get ('/getDepartmentList', (req, res) => {
    getDepartmentList(res);
})

app.post('/addDepartment', upload.array(), (req, res) => {
    if(!req.body) return res.sendStatus(400);
    addDepartment(req, res);
});

app.post('/registration', upload.array(), (req, res) => {
    if(!req.body) return res.sendStatus(400);
    regUser(req, res);
});

app.post('/login', upload.array(), (req, res) => {
    if(!req.body) return res.sendStatus(400);
    logIn(req, res);
});

app.listen(3000, ()=> {
    console.log("ARM-ZVIT Server listening on 3000 port");
});