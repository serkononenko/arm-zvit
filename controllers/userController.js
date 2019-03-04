const User = require('../models/userbase');

const user_list = (req, res) => {
    User.find({}, (err, result) => {
        if (err) console.error(err)
        else res.send(result);
    });
};

const user_create = (req, res) => {
    const { login, password, department } = req.body;
    const userData = new User({
        login,
        password,
        department
    });
    userData.save((err) => {
        if (err) console.error(err)
        else res.status(200).send('OK');
    });
};

const user_delete = (req, res) => {
    const { login } = req.body;
    User.findOneAndDelete({login}, (err, result) => {
        if (err) console.error(err)
        else res.status(200).send('OK');
    });
}

const register_user = (req, res) => {
    const result = findUser(req.body.login);
    if (!!result) {
        res.status(403).send('Forbidden');
    } else user_create(req, res);
}

async function login_user(req, res) {
    const { login, password } = req.body;
    const result = await findUser(login);
    console.log(result);
    if (!result) {
        res.status(401).send('Unauthorized');
    } else {
        if (password === result.password) {
            res.status(200).send('OK');
        } else {
            res.status(403).send('Forbidden');
        }
    }
}

async function findUser(login) {
    return await User.findOne({ login });
}

module.exports = {
    login_user,
    register_user
}