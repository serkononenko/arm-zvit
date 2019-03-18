const crypto = require('crypto');
const salt = 'erondondon';

const User = require('../models/userbase');

const user_list = (req, res) => {
    User.find({}, (err, result) => {
        if (err) console.error(err)
        else {
            res.status(200).send(result);
        };
    });
};

const user_profile = (req, res) => {
    if (req.query) {
        User.find({login: req.query.q}, (err, result) => {
            if (err) console.error(err)
            else {
                res.send(result[0]);
            };
        })
    } else {
        res.redirect(200, '/');
    }
}

const user_create = (req, res) => {
    const { login, password, department } = req.body;
    crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, derivedKey) => {
        if (err) throw err;
        const userData = new User({
            login,
            password: derivedKey.toString('hex'),
            department
        });
        userData.save((err) => {
            if (err) console.error(err)
            else res.status(200).send('OK');
        });
    });
};

const user_delete = (req, res) => {
    const { login } = req.body;
    User.findOneAndDelete({login}, (err, result) => {
        if (err) console.error(err)
        else res.status(200).send('OK');
    });
}

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
        crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, derivedKey) => {
            if (err) throw err;
            if (derivedKey.toString('hex') === result.password) {
                req.session.user_id = result._id;
                res.status(200).send(result);
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
    user_list,
    user_profile
}