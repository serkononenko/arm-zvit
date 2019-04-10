const crypto = require('crypto');
const JWT = require('../utils/JWT');
const User = require('../models/userbase');

const user_list = (req, res) => {
    User.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.status(200).send(result);
        }
    });
};

const user_create = (req, res) => {
    const { login, password, department } = req.body;
    crypto.pbkdf2(password, JWT.salt, 100000, 64, JWT.digest, (err, derivedKey) => {
        if (err) throw err;
        const userData = new User({
            login,
            password: derivedKey.toString('hex'),
            department
        });
        userData.save((err) => {
            if (err) throw err;
            else res.status(200).send('OK');
        });
    });
};

const user_delete = (req, res) => {
    const { login } = req.body;
    User.findOneAndDelete({login}, (err) => {
        if (err) throw err;
        else res.status(200).send('OK');
    });
};

async function register_user(req, res) {
    const result =  await findUser(req.body.login);
    if (!!result) {
        res.status(403).send('Forbidden');
    } else user_create(req, res);
}

async function login_user(req, res) {
    const { login, password } = req.body;
    const result = await findUser(login);
    if (!result) {
        res.status(401).send('Unauthorized');
    } else {
        crypto.pbkdf2(password, JWT.salt, 100000, 64, JWT.digest, (err, derivedKey) => {
            if (err) throw err;
            if (derivedKey.toString('hex') === result.password) {
                const { _id, login, isAdmin } = result;
                const payload = {
                    _id,
                    login,
                    isAdmin
                };
                const token = JWT.sign(payload);
                res.status(200).send(token);
            } else {
                res.status(403).send('Forbidden');
            }
        });
    }
}

async function findUser(login) {
    return await User.findOne({ login });
}

module.exports = {
    login_user,
    register_user,
    user_list
};