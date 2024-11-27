// route.js
const express = require('express');
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const imageController = require('../controllers/imageController');
const router = express.Router();

// Định nghĩa route sử dụng các hàm từ controller
router.get('/api/get-all-user', userController.getInforUsersFromService);
router.post('/api/add-user', userController.createNewInforUser);
router.delete('/api/delete-user/:userId', userController.handleDeleteInforUser);
router.get('/api/test', userController.testData);

router.post('/api/add-new-product', productController.createNewInforProductFromService);
router.get('/api/get-all-product', productController.getAllInforProductFromService);
router.delete('/api/delete-product/:productId', productController.handleDeleteInforProduct);

router.post('/api/upload-image', imageController.uploadImage);


module.exports = router;