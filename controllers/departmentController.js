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
        department
    });
    departmentData.save((err) => {
        if (err) console.log(err);
        else res.status(200).send('OK');
    })
}

module.exports = {
    department_list,
    department_create
}