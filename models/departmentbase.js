const mongoose = require('mongoose');

//create Shema
const departmentListSchema = new mongoose.Schema({
    department: String
});

//create & export Model
module.exports = mongoose.model('departmentBase', departmentListSchema);