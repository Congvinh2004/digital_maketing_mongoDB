//userService.js

const mongoose = require('mongoose');

const userModel = require('../models/userModel');
const ShopOrder = require('../models/shopOrderModel');

const uri = 'mongodb://localhost:27017/admin';

// connect to DB
mongoose.connect(uri, {})
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch(err => {
        console.error('Connected to MongoDB error:', err);
    });

let getUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('Fetching all users from MongoDB');
            let users = await userModel.find().populate("orders"); // Populate orders collection
            resolve({
                errCode: 0,
                data: users
            });
        } catch (e) {
            reject(e);
        }
    });
};
let validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


let createNewUser = (userData) => {
    return new Promise(async (resolve, reject) => {
        let { name, email, password, address, phoneNumber, role } = userData
        try {
            if (validateEmail(email) === false || !name || !email || !password || !address || !phoneNumber || !role) {
                resolve({
                    errCode: 1,
                    message: 'User created error'
                })
                return;
            }
            let foundUser = await userModel.findOne({
                email: email
            })
            if (!foundUser) {
                await userModel.create(userData);
                resolve({
                    errCode: 0,
                    message: 'User created successfully',
                });

            }
            else {
                resolve({
                    errCode: 1,
                    message: 'User created error',
                    foundUser: foundUser
                })
                return;
            }
        } catch (e) {
            reject(e);
        }
    });
};

let deleteUser = async (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let foundUser = await userModel.findOne({ _id: userId });
            if (foundUser) {
                await userModel.deleteOne({ _id: userId });
                resolve({
                    errCode: 0,
                    message: 'User deleted successfully',
                    // Trả về một đối tượng đơn giản, không có vòng lặp
                    deletedUser: {
                        _id: foundUser._id,
                        name: foundUser.name,
                        email: foundUser.email,
                        // Bạn có thể thêm các thuộc tính khác mà bạn muốn trả về
                    }
                });
            } else {
                resolve({
                    errCode: 1,
                    message: 'User does not exist',
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};


module.exports = {
    getUsers,
    createNewUser,
    deleteUser
}
