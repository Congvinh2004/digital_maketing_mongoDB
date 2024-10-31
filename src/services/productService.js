const mongoose = require('mongoose');
const productModel = require('../models/productModel');
const cartModel = require('../models/cartModel');
const orderModel = require('../models/orderModel');
const uri = 'mongodb://localhost:27017/admin';

// connect to DB
mongoose.connect(uri, {})
    .then(() => {
        console.log('Connected to MongoDB successfully from Product');
    })
    .catch(err => {
        console.error('Connected to MongoDB error:', err);
    });



let createProduct = (inputProduct) => {

    return new Promise(async (resolve, reject) => {
        let { name, description, image, price, quantity, category } = inputProduct

        try {
            if (!name || !description || !image || !price || !quantity || !category) {
                resolve({
                    errCode: 1,
                    message: 'input product not determined'
                })
                return;
            }
            await productModel.create(inputProduct);
            resolve({
                errCode: 0,
                message: 'Product created successfully',
            });
        } catch (e) {
            reject(e);
        }
    });
};

let getAllProduct = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allProduct = await productModel.find()// Populate orders collection
            resolve({
                errCode: 0,
                data: allProduct
            });
        } catch (e) {
            reject(e);
        }
    });
};

let deleteProduct = async (productId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let foundProduct = await productModel.findOne({ _id: productId });
            if (foundProduct) {
                await productModel.deleteOne({ _id: productId });
                resolve({
                    errCode: 0,
                    message: 'Product deleted successfully',
                    foundProduct: {
                        _id: foundProduct._id,
                        name: foundProduct.name,
                        discription: foundProduct.discription,
                        image: foundProduct.image,
                        price: foundProduct.price,
                    }
                });
            } else {
                resolve({
                    errCode: 1,
                    message: 'Product does not exist',
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};



let createCart = (inputCart) => {

    return new Promise(async (resolve, reject) => {
        try {
            await cartModel.create(inputCart);
            resolve({
                errCode: 0,
                message: 'Cart created successfully',
            });
        } catch (e) {
            reject(e);
        }
    });
};

let getAllCart = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allCart = await cartModel.find()// Populate orders collection
            console.log('check all carts: ', allCart)
            if (allCart) {
                resolve({
                    errCode: 0,
                    data: allCart
                });
            }
            resolve({
                errCode: 1,
                message: 'carts does not exist'
            });

        } catch (e) {
            reject(e);
        }
    });
};


let deleteCartById = async (cartId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let foundCart = await cartModel.findOne({ _id: cartId });
            if (foundCart) {
                await cartModel.deleteOne({ _id: cartId });
                resolve({
                    errCode: 0,
                    message: 'cart deleted successfully',
                    foundCart: {
                        _id: foundCart._id,
                        userId: foundCart.userId,
                        shipping: foundCart.items,
                        totalPrice: foundCart.totalPrice,
                        status: foundCart.status,
                    }
                });
            } else {
                resolve({
                    errCode: 1,
                    message: 'Cart does not exist',
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

let createOrder = (inputOrder) => {

    return new Promise(async (resolve, reject) => {
        try {
            await orderModel.create(inputOrder);
            resolve({
                errCode: 0,
                message: 'Order created successfully',
            });
        } catch (e) {
            reject(e);
        }
    });
};

let getAllInforOrder = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allInforOrder = await orderModel.find()// Populate orders collection
            console.log('check all infor order: ', allInforOrder)
            if (allInforOrder) {
                resolve({
                    errCode: 0,
                    data: allInforOrder
                });
            }
            else {
                resolve({
                    errCode: 1,
                    message: 'infor order does not exist'
                });
            }


        } catch (e) {
            reject(e);
        }
    });
};

let deleteInforOrderById = async (orderId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let foundInforOrder = await orderModel.findOne({ _id: orderId });
            console.log('check infor order: ', foundInforOrder)
            if (foundInforOrder) {
                await orderModel.deleteOne({ _id: orderId });
                resolve({
                    errCode: 0,
                    message: 'infor order deleted successfully',
                    foundInforOrder: {
                        _id: foundInforOrder._id,
                        userId: foundInforOrder.userId,
                        items: foundInforOrder.items,
                        totalPrice: foundInforOrder.totalPrice,
                        status: foundInforOrder.status,
                    }
                });
            } else {
                resolve({
                    errCode: 1,
                    message: 'infor order does not exist',
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};


module.exports = {
    createProduct,
    createCart,
    createOrder,
    getAllProduct,
    deleteProduct,
    deleteCartById,
    getAllCart,
    getAllInforOrder,
    deleteInforOrderById
}
