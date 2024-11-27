const mainService = require('../services/userService')
const axios = require('axios');
let getInforUsersFromService = async (req, res) => {
    try {
        let allUsers = await mainService.getAllInforUsers()
        console.log('check alluser: ', allUsers)
        return res.status(200).send(allUsers)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ error: 'Failed to fetch users infor' });
    }
};


let testData = async (req, res) => {
    try {
        const response = await mainService.getAllRecordUserToSQL();
        console.log('Data from SQL:', response.data);
        return res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data from SQL:', error);
        return res.status(500).json({ error: 'Failed to fetch data from SQL' });
    }
};

let createNewInforUser = async (req, res) => {
    try {
        let message = await mainService.createNewInforUser();
        return res.status(200).json(message)
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: 'An error occurred while creating user infor' });
    }
};

let handleDeleteInforUser = async (req, res) => {
    try {
        // Xóa người dùng dựa trên userId
        let message = await mainService.deleteInforUser(req.params.userId);

        return res.status(200).json(message)

    } catch (e) {
        console.error(e);
        return res.status(500).send({ error: 'Delete user infor failed' });
    }
};

module.exports = {
    getInforUsersFromService,
    createNewInforUser,
    handleDeleteInforUser,
    testData
}
