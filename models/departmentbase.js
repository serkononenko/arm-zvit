const mongoose = require('mongoose');
const reportBaseSchema = require('./reportbase')

//create Shema
const departmentListSchema = new mongoose.Schema({
    department: String,
    reports: [reportBaseSchema]
});

//create & export Model
module.exports = mongoose.model('departmentBase', departmentListSchema);