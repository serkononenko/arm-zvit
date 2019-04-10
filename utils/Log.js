const fs= require('fs');
const path = require('path');
const rootDir = require('../dirname').rootDir;

function logStream (name) {
    const logPath = path.join(rootDir, './logs/');
    if (!fs.existsSync(logPath)) {
        fs.mkdirSync(logPath);
    }
    return fs.createWriteStream(path.join(logPath, name), {flags: 'a'});
}

module.exports = logStream;