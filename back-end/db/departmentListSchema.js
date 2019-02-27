const mongoose = require('mongoose');

//create Shema
const departmentListSchema = new mongoose.Schema({
    department: String
});

//create Model
const DepartmentBase = mongoose.model('departmentBase', departmentListSchema);

function getDepartmentList(res) {
    var query = DepartmentBase.find();
    var p = new Promise((resolve, reject) => {
        query.exec((err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
    p.then((result) => {
        res.status(200).send(result);
    })
}

function addDepartment (req, res) {
    var body = req.body;
    var department = new DepartmentBase({
        department: body.department
    });
    department.save();
}

module.exports = { getDepartmentList, addDepartment }