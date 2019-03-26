const mongoose = require('mongoose');

function createDb() {
    mongoose.connect('mongodb://localhost/arm-zvit', { useNewUrlParser: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', function() {
        console.log.bind(console, 'Connected');
    });
}

module.exports =  createDb;