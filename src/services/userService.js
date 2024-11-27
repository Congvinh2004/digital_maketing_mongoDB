// //userService.js
const axios = require('axios');

const userModel = require('../models/userModel');

const SQL_API_URL_USER = 'http://localhost:8080/api/get-all-user'

let getAllRecordUserToSQL = () => {
    return axios.get(SQL_API_URL_USER)
}


let getAllInforUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('Fetching all infor users from MongoDB');
            let users = await userModel.find() // Populate orders collection
            resolve({
                errCode: 0,
                data: users
            });
        } catch (e) {
            reject(e);
        }
    });
};

let createNewInforUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let userInforData = await getAllRecordUserToSQL(); // getAllRecordUserToSQL() trả về một mảng thông tin người dùng
            if (userInforData) {
                console.log('check userInforData ', userInforData.data);

                // Duyệt qua thông tin từng người trong mảng
                let count = 0;
                for (let userData of userInforData.data) {
                    let foundUser = await userModel.findOne({ userId: userData.userID });

                    if (!foundUser) {
                        // Nếu userId chưa tồn tại, tạo người dùng mới
                        await userModel.create({
                            userId: userData.userID,
                            name: userData.name,
                            image: userData.avatar,
                        });
                        console.log(`User ${userData.userID} created successfully.`);
                        count++;
                    } else {
                        console.log(`User ${userData.userID} already exists.`);
                    }
                }

                resolve({
                    errCode: 0,
                    message: count + ' users processed successfully',
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


let deleteInforUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('check userId: ', userId)
            let foundUser = await userModel.findOne({ userId: userId });
            console.log('check foundUser: ', foundUser)
            if (foundUser) {
                await userModel.deleteOne({ userId: userId });
                resolve({
                    errCode: 0,
                    message: 'User infor deleted successfully',
                    // Trả về một đối tượng đơn giản, không có vòng lặp
                    deletedUser: {
                        userId: foundUser.userId,
                        name: foundUser.name,
                        image: foundUser.image,
                    }
                });
            } else {
                resolve({
                    errCode: 1,
                    message: 'User infor does not exist',
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};


module.exports = {
    getAllInforUsers,
    createNewInforUser,
    deleteInforUser,
    getAllRecordUserToSQL
}
