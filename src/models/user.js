const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
    },
    telefone: {
        type: String,
        require: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        select: false,
    },
    creatdAt: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', function(next) {
    const hash =  bcrypt.hash(this.password, 10);

    this.password = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;