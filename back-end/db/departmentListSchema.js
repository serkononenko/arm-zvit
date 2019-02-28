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
    p.then((result, err) => {
        if(result) res.status(200).send(result);
        if(err) res.status(400);
    })
}

function addDepartment (req, res) {
    const body = req.body;
    const department = new DepartmentBase({
        department: body.department
    });
    department.save();
    res.status(200).send('OK');
}

module.exports = { getDepartmentList, addDepartment }