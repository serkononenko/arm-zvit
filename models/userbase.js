const mongoose = require('mongoose');

//create Shema
const userBaseSchema = new mongoose.Schema({
    login: {
        type: String,
        unique: true
    },
    password: String,
    department: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'department',
        required: true
    },
    image: String,
    isAdmin: Boolean
});

//create & export Model
module.exports = mongoose.model('userBase', userBaseSchema);