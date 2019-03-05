const Department = require('../models/departmentbase');

const department_list = (req, res) => {
    const query = Department.find();
    query.exec((err, result) => {
        if (err) console.error(err)
        else res.send(result);
    });
};

module.exports = {
    department_list
}