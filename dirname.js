const path = require('path');
const fs = require('fs');
const rootDir = __dirname;

const file = (name) => {
    const date = new Date();
    fs.mkdirSync('./view/dist/images/profile/'+name+'/', { recursive: true }, (err) => {
        if (err) throw err;
    });
    const imageName = name + '_'+date.getFullYear()+(date.getMonth()+1)+date.getDate()+'_'+date.getHours()+date.getMinutes()+date.getSeconds();
    return path.normalize(
        path.format({
            dir: './view/dist/images/profile/'+name+'/',
            name: imageName,
            ext: '.jpg'
        })
    );
};

const pathToBase = (str) => {
    const arr = str.split(path.sep);
    const tmpArr = arr.slice(-4);
    return tmpArr.join(path.sep);
};

module.exports = {
    rootDir,
    file,
    pathToBase
};

