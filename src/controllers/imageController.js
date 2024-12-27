const imageService = require('../services/imageService')


let uploadImage = async (req, res) => {
    try {
        // Lấy dữ liệu người dùng từ body
        console.log('check input from SQL: ', req.body)
        let message = await imageService.uploadImageByService(req.body);
        return res.status(200).json(message)
    } catch (e) {
        console.error('Error uploading image');
        return res.status(500).json({ error: 'Failed to upload image' });
    }
};






module.exports = {

    uploadImage,

}
