const JWT = require('../utils/JWT');

const accessControl = (req, res, next) => {
    if (req.get('Authorization')) {
        const token = req.get('Authorization').split(' ')[1];
        console.log(JWT.verify(token));
    }
    next();
};

module.exports = accessControl;