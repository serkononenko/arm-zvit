const mongoose = require('mongoose');

const reportBaseSchema = new mongoose.Schema({
    code: String,
    title: String,
    body: String
});

module.exports = reportBaseSchema;