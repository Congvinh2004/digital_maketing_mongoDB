// cartModel.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    // Nhúng items trực tiếp vào cart
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        price: {
            type: Number,
            required: true
        },
        name: String
    }],
    totalPrice: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: 'active'
    },
    // Thông tin thanh toán nhúng trực tiếp
    payment: {
        method: String,
        status: String,
        datePayment: Date,
        transactionIdUser: String,
        transactionIdMerchant: String
    }
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;