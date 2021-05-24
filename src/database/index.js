const mongoose = require('mongoose');

const { MongoClient } = require('mongodb');

mongoose.set ( 'useCreateIndex', true);
mongoose.connect('mongodb+srv://evanilson:JKlu7wojmaqFS4QH@cluster0.ihglb.mongodb.net/UserPilar?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;