const productService = require('../services/productService')




let createNewInforProductFromService = async (req, res) => {
    try {
        // Lấy dữ liệu người dùng từ body
        let message = await productService.createInforProduct(req.body);
        return res.status(200).json(message)
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: 'An error occurred while creating product infor' });
    }
};

let getAllInforProductFromService = async (req, res) => {
    try {
        let allProduct = await productService.getAllInforProduct()
        console.log('Check all infor products: ', allProduct)
        return res.status(200).send(allProduct)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ error: 'Failed to fetch product infor' });
    }
};

let handleDeleteInforProduct = async (req, res) => {
    try {
        // Xóa sản phẩm dựa trên productId
        let message = await productService.deleteInforProduct(req.params.productId);

        return res.status(200).json(message)

    } catch (e) {
        console.error(e);
        return res.status(500).send({ error: 'Delete product infor failed' });
    }
};


module.exports = {
    createNewInforProductFromService,
    getAllInforProductFromService,
    handleDeleteInforProduct,
}