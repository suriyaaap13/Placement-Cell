const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/PlacementCell_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to mongoDB'));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;