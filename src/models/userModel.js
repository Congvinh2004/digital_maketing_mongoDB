// userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    // Thêm mảng tham chiếu đến orders
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ShopOrder'
    }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;