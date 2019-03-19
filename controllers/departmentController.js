const Department = require('../models/departmentbase');

const department_list = (req, res) => {
    const query = Department.find();
    query.exec((err, result) => {
        if (err) console.error(err)
        else res.send(result);
    });
};

const department_create = (req, res) => {
    const { department } = req.body;
    const departmentData = new Department({
        name: department
    });
    departmentData.save((err) => {
        if (err) console.log(err);
        else res.status(200).send('OK');
    })
}

const department_find_by_id = (req, res) => {
    const { _id } = req.body;
    Department.findById(_id, (err, result) => {
        if (err) console.log(err);
        res.send(result);
    })
};

module.exports = {
    department_list,
    department_create,
    department_find_by_id
}