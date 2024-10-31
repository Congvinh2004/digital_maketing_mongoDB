// route.js
const express = require('express');
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const router = express.Router();

// Định nghĩa route sử dụng các hàm từ controller
router.get('/api/get-all-user', userController.getUsersFromService);
router.post('/api/add-user', userController.createNewUser);
router.delete('/delete-user/:userId', userController.handleDeleteUser);

router.post('/api/add-new-product', productController.createNewProductFromService);
router.get('/api/get-all-product', productController.getAllProductFromService);
router.delete('/api/delete-product/:productId', productController.handleDeleteProduct);

router.post('/api/add-cart', productController.createNewCartFromService);
router.delete('/api/delete-cart/:cartId', productController.handleDeleteCartById);
router.get('/api/get-all-cart', productController.getAllCartFromService);



router.post('/api/add-order', productController.createNewOrderFromService);
router.get('/api/get-all-infor-order', productController.getInforOrderFromService);
router.delete('/api/delete-infor-order/:orderId', productController.handleDeleInforOrderById);

module.exports = router;