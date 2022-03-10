var mongoose = require('mongoose');
var config = require('../config/config.json');

mongoose.connect(config.mongoose, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connection To Data Base");
});


module.exports = db;