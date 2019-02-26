const mongoose = require('mongoose');

//create Shema
const userBaseChema = new mongoose.Schema({
    login: String,
    password: String
});

//create Model
const UserBase = mongoose.model('userBase', userBaseChema);

function addUser(body) {
    findUser(body.login);
//    deleteUser(body.login);
    /*
    const userData = new UserBase({
        login: body.login,
        password: body.password
    });
    userData.save();
*/    
}

function findUser(userName) {
    UserBase.findOne({login: userName}, function(err, userBase) {
        if(err) console.error(err)
        else console.log(userBase);
    });
}

function deleteUser(userName) {
    UserBase.findOneAndDelete({login: userName}, function(err, data) {
        if (err) console.error(err)
        else console.log('deleted login: ' + data.login);
    });
}

module.exports = addUser;