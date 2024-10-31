const productService = require('../services/productService')




let createNewProductFromService = async (req, res) => {
    try {
        // Lấy dữ liệu người dùng từ body
        let message = await productService.createProduct(req.body);
        return res.status(200).json(message)
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: 'An error occurred while creating product' });
    }
};

let getAllProductFromService = async (req, res) => {
    try {
        let allProduct = await productService.getAllProduct()
        console.log('Check all products: ', allProduct)
        return res.status(200).send(allProduct)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ error: 'Failed to fetch product' });
    }
};

let handleDeleteProduct = async (req, res) => {
    try {
        // Xóa sản phẩm dựa trên productId
        let message = await productService.deleteProduct(req.params.productId);

        return res.status(200).json(message)

    } catch (e) {
        console.error(e);
        return res.status(500).send({ error: 'Delete product failed' });
    }
};

let createNewCartFromService = async (req, res) => {
    try {
        // Lấy dữ liệu người dùng từ body
        let message = await productService.createCart(req.body);
        return res.status(200).json(message)
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: 'An error occurred while creating product' });
    }
};

let getAllCartFromService = async (req, res) => {
    try {
        let allCart = await productService.getAllCart()
        return res.status(200).json(allCart)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ error: 'Failed to fetch cart' });
    }
};


let handleDeleteCartById = async (req, res) => {
    try {
        // Xóa sản phẩm dựa trên cartId
        let message = await productService.deleteCartById(req.params.cartId);

        return res.status(200).json(message)

    } catch (e) {
        console.error(e);
        return res.status(500).send({ error: 'Delete cart failed' });
    }
};

let createNewOrderFromService = async (req, res) => {
    try {
        // Lấy dữ liệu người dùng từ body
        let message = await productService.createOrder(req.body);
        return res.status(200).json(message)
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: 'An error occurred while creating order' });
    }
};

let getInforOrderFromService = async (req, res) => {
    try {
        let allInforOrder = await productService.getAllInforOrder()
        return res.status(200).json(allInforOrder)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ error: 'Failed to fetch infor order' });
    }
};


let handleDeleInforOrderById = async (req, res) => {
    try {
        // Xóa sản phẩm dựa trên cartId
        let message = await productService.deleteInforOrderById(req.params.orderId);

        return res.status(200).json(message)

    } catch (e) {
        console.error(e);
        return res.status(500).send({ error: 'Delete infor order failed' });
    }
};

module.exports = {
    createNewProductFromService,
    createNewCartFromService,
    createNewOrderFromService,
    getAllProductFromService,
    handleDeleteProduct,
    handleDeleteCartById,
    getAllCartFromService,
    getInforOrderFromService,
    handleDeleInforOrderById
}