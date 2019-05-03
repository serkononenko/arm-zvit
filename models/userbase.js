const mongoose = require('mongoose');
const crypto = require('crypto');

//create Shema
const userBaseSchema = new mongoose.Schema({
    login: {
        type: String,
        unique: true
    },
    passwordPBKDF2: String,
    salt: String,
    department: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'department',
        required: true
    },
    image: String,
    isAdmin: {
        type: Boolean,
        default: false
    }
});

userBaseSchema.virtual('password')
    .get(function() {
        return this.passwordPBKDF2;
    })
    .set(function(password) {
        this.salt = crypto.randomBytes(16).toString('hex');
        this.passwordPBKDF2 = crypto.pbkdf2Sync(password, this.salt, 100000, 16, 'sha512').toString('hex');
    });

userBaseSchema.static('comparePasswords', function(password, user) {
    return (crypto.pbkdf2Sync(password, user.salt, 100000, 16, 'sha512').toString('hex') === user.passwordPBKDF2) ? true : false;
});
//create & export Model
module.exports = mongoose.model('userBase', userBaseSchema);