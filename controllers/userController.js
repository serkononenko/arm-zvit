const crypto = require('crypto');
const fs = require('fs');
const JWT = require('../utils/JWT');
const { file, pathToBase } = require('../dirname')
const User = require('../models/userbase');
const Department = require('../models/departmentbase');

const user_list = (req, res) => {
    User.find({}, (err, result) => {
        if (err) console.error(err)
        else {
            res.status(200).send(result);
        };
    });
};

const user_profile = (req, res) => {
    console.log(req.query);
    if (req.query) {
        User.findById(req.query.id, (err, result) => {
            if (err) console.error(err)
            else {
                const { _id, login, image, isAdmin } = result;
                const departmentId = result.department;
                Department.findById(departmentId, (err, result) => {
                    if (err) console.error(err);
                    const department = result.name;
                    res.send({
                        _id,
                        login,
                        department,
                        image,
                        isAdmin
                    });
                })
            };
        })
    } else {
        res.redirect(200, '/');
    }
}

const user_profile_update = (req, res) => {
    if (req.get('Content-Type') === 'image/jpeg') {
        user_profile_update_image(req, res);
    }

}

const user_profile_update_image = (req, res) => {
    const { id } = req.query;
    const path = file(id);
    const writable = fs.createWriteStream(path);
    req.pipe(writable);
    const q = User.where({_id: id});
    q.updateOne({image: pathToBase(path)}, (err) => {
        if (err) console.error(err);
        res.status(200).send('OK');
    });
}

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
    user_list,
    user_profile,
    user_profile_update
}