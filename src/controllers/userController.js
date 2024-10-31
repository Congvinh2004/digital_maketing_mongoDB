const mainService = require('../services/userService')

let getUsersFromService = async (req, res) => {
    try {
        let allUsers = await mainService.getUsers()
        console.log('check alluser: ', allUsers)
        return res.status(200).send(allUsers)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ error: 'Failed to fetch users' });
    }
};

let createNewUser = async (req, res) => {
    try {
        // Lấy dữ liệu người dùng từ body
        let message = await mainService.createNewUser(req.body);
        return res.status(200).json(message)
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: 'An error occurred while creating user' });
    }
};

let handleDeleteUser = async (req, res) => {
    try {
        // Xóa người dùng dựa trên userId
        let message = await mainService.deleteUser(req.params.userId);

        return res.status(200).json(message)

    } catch (e) {
        console.error(e);
        return res.status(500).send({ error: 'Delete user failed' });
    }
};

module.exports = {
    getUsersFromService,
    createNewUser,
    handleDeleteUser
}
