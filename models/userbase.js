const mongoose = require('mongoose');

//create Shema
const userBaseChema = new mongoose.Schema({
    login: {
        type: String,
        unique: true
    },
    password: String,
    department: {
        type: Schema.ObjectId,
        ref: 'departmentBase',
        required: true
    },
    isAdmin: Boolean
});

//create & export Model
module.exports = mongoose.model('userBase', userBaseChema);