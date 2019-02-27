const mongoose = require('mongoose');

//create Shema
const userBaseChema = new mongoose.Schema({
    login: String,
    password: String
});

//create Model
const UserBase = mongoose.model('userBase', userBaseChema);

function regUser(req, res) {
    const body = req.body;
    findUser(body.login)
        .then((result) => {
            if (!result.length) {
                addUser(body);
                res.status(200).send('OK');
            } else {
                res.status(403).send('Forbidden');
            };
        });
}

function addUser(body) {
    const userData = new UserBase({
        login: body.login,
        password: body.password
    });
    userData.save();    
}

function findUser(login) {
    var query = UserBase.find({ login });
    return new Promise((resolve, reject) => {
        query.exec((err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

function deleteUser(userName) {
    UserBase.findOneAndDelete({login: userName}, function(err, data) {
        if (err) console.error(err)
        else console.log('deleted login: ' + data.login);
    });
}

module.exports = regUser;