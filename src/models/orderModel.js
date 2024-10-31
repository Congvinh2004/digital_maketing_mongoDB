// orderModel.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dateOrder: {
        type: Date,
        default: Date.now
    },
    // Nhúng thông tin shipping
    shipping: {
        method: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    // Nhúng items trực tiếp vào order
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity: Number,
        price: Number,
        name: String
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'pending'
    },
    // Nhúng thông tin payment
    payment: {
        method: String,
        status: String,
        datePayment: Date,
        transactionId: String
    }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;