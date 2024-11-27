// userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },

});

const User = mongoose.model('User', userSchema);
module.exports = User;