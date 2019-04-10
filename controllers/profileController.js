const fs = require('fs');
const User = require('../models/userbase');
const Department = require('../models/departmentbase');
const { file, pathToBase } = require('../dirname');

const user_profile = (req, res) => {
    const { id } = req.params;
    if (id) {
        User.findById(id, (err, result) => {
            if (err) throw err;
            else {
                const { _id, login, image, isAdmin } = result;
                const departmentId = result.department;
                Department.findById(departmentId, (err, result) => {
                    if (err) throw err;
                    const department = result.name;
                    res.send({
                        _id,
                        login,
                        department,
                        image,
                        isAdmin
                    });
                });
            }
        });
    } else {
        res.redirect(200, '/');
    }
};

const user_profile_update = (req, res) => {
    if (req.get('Content-Type') === 'image/jpeg') {
        user_profile_update_image(req, res);
    } else {
        const { _id, login } = JSON.parse(req.body);
        User.findOneAndUpdate({_id}, { $set: {login}}, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    }    
};

const user_profile_update_image = (req, res) => {
    const id = req.params.id;
    const path = file(id);
    const writable = fs.createWriteStream(path);
    req.pipe(writable);
    const q = User.where({_id: id});
    q.updateOne({image: pathToBase(path)}, (err) => {
        if (err) throw err;
        res.status(200).send('OK');
    });
};

module.exports = {
    user_profile,
    user_profile_update
};