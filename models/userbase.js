const mongoose = require('mongoose');

//create Shema
const userBaseChema = new mongoose.Schema({
    login: String,
    password: String,
    department: String,
    isAdmin: Boolean
});

//create & export Model
module.exports = mongoose.model('userBase', userBaseChema);



function regUser(req, res) {
    const body = req.body;
    const result = findUser(body.login)
            if (!!result) {
                res.status(403).send('Forbidden');
            } else {
                addUser(body);
                res.status(200).send('OK');
            };

}

async function logIn(req, res) {
    const body = req.body;
    const result = await findUser(body.login);
    console.log(result);
        if (!result) {
            res.status(401).send('Unauthorized');
        } else {
            if (body.password === result.password) {
                res.status(200).send('OK');
            } else {
                res.status(403).send('Forbidden');
            }
        }
}

async function addUser(body) {
    const userData = new UserBase({
        login: body.login,
        password: body.password,
        department: body.department
    });
    await userData.save();    
}

async function findUser(login) {
    const result = await UserBase.findOne({ login });
    return result;
}

async function deleteUser(userName) {
    await UserBase.findOneAndDelete({login: userName}, function(err, data) {
        if (err) console.error(err)
        else console.log('deleted login: ' + data.login);
    });
}