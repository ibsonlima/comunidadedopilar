const mongoose = require('mongoose');

const { MongoClient } = require('mongodb');

mongoose.set ( 'useCreateIndex', true);
mongoose.connect('mongodb://localhost/UserPilar', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;