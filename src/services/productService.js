const axios = require('axios');
const productModel = require('../models/productModel');

const SQL_API_URL_PRODUCT = 'http://localhost:8080/api/get-all-product'
let getAllRecordProductToSQL = () => {
    return axios.get(SQL_API_URL_PRODUCT)
}

let createInforProduct = () => {

    return new Promise(async (resolve, reject) => {

        try {
            let detailInforProductData = await getAllRecordProductToSQL(); // getAllRecordProductToSQL() trả về một mảng thông tin sản phẩm
            if (detailInforProductData) {

                console.log('check userInforData ', detailInforProductData.data);

                let count = 0;
                for (let productData of detailInforProductData.data) {
                    let foundProduct = await productModel.findOne({ productId: productData.productID });

                    if (!foundProduct) {
                        // Nếu productId chưa tồn tại, tạo sản phẩm mới
                        await productModel.create({
                            productId: productData.productID,
                            name: productData.name,
                            image: productData.image,
                        });
                        console.log(`Product ${productData.productID} created successfully.`);
                        count++;
                    } else {
                        console.log(`Product ${productData.productID} already exists.`);
                    }
                }

                resolve({
                    errCode: 0,
                    message: count + ' product processed successfully',
                });
            }
            else {
                resolve({
                    errCode: 1,
                    message: 'An error occurred while get data from SQL.',
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};



let deleteInforProduct = async (productId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let foundProduct = await productModel.findOne({ productId: productId });
            if (foundProduct) {
                await productModel.deleteOne({ productId: productId });
                resolve({
                    errCode: 0,
                    message: 'Product deleted successfully',
                    foundProduct: {
                        productId: foundProduct.productId,
                        name: foundProduct.name,
                        image: foundProduct.image,
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






module.exports = {
    createInforProduct,
    deleteInforProduct,
}
