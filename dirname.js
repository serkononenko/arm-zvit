const path = require('path');
const rootDir = __dirname;

const file = (name) => {
    return path.format({
        root: rootDir,
        dir: './view/profile',
        name: name,
        ext: '.jpg'
    });
}

module.exports = {
    rootDir,
    file
};

