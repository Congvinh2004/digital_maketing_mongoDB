// shopOrderModel.js
const mongoose = require('mongoose');

const shopOrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
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
    dateOrder: {
        type: Date,
        default: Date.now
    }
});

const ShopOrder = mongoose.model('ShopOrder', shopOrderSchema);
module.exports = ShopOrder;