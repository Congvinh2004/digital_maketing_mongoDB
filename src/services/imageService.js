// //userService.js
const cloudinary = require('cloudinary').v2; // khai báo 

let uploadImageByService = (imgUpload) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('check imageLink: ', imgUpload.imgLink)
            // API route để upload ảnh lên Cloudinary
            if (imgUpload && imgUpload.imgLink) {
                // Upload ảnh từ link đã lấy từ database
                const result = await cloudinary.uploader.upload(imgUpload.imgLink, {
                    folder: 'Image_Project' // Đặt ảnh vào thư mục nếu cần
                });
                // Trả về URL ảnh sau khi upload thành công
                resolve({
                    errCode: 0,
                    data: result
                })
            }
            else {
                resolve({
                    errCode: -1,
                    errMessage: 'Image link is required'
                })

            }

        } catch (e) {
            console.error('Upload image error:', e);
            reject(e);
        }
    });
};



module.exports = {

    uploadImageByService,

}
