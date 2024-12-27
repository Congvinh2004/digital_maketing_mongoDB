const axios = require('axios');


// Class đại diện cho một người dùng
class User {
    #userID;
    #name;
    #address;
    #username;
    #password;
    #phoneNumber;
    #avatar;
    constructor(userID, name, address, username, password, phoneNumber, avatar) {
        this.userID = userID; // ID người dùng
        this.name = name; // Tên người dùng
        this.address = address; // địa chỉ
        this.username = username; // tên đăng nhập
        this.password = password; // password
        this.phoneNumber = phoneNumber; //sdt
        this.avatar = avatar;  // avatar
    }
    getName() {
        return this.#name;
    }

    // Setter để thay đổi giá trị
    setName(newName) {
        if (newName.length > 0) {
            this.#name = newName;
        } else {
            console.error('Tên không hợp lệ!');
        }
    }

    getInfo() {
        return `
        ID: ${this.#userID}, Name: ${this.#name}, Address: ${this.#address}, Username: ${this.#username}, Password: ${this.#password},Phone number: ${this.#phoneNumber}, Avatar: ${this.#avatar}`;
    }
}



// Class đại diện cho một sản phẩm
class Product {
    constructor(productID, description, image, name, price, quantity, productCategoryID) {
        this.productID = productID;
        this.description = description;
        this.image = image;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.productCategoryID = productCategoryID;
    }
}

// Class cơ sở dữ liệu hướng đối tượng
class RDatabase {
    constructor() {
        this.listUsers = [];    // Danh sách người dùng
        this.listProducts = []; // Danh sách sản phẩm
    }

    // Thêm một người dùng
    addUser(user) {
        this.listUsers.push(user);
        console.log(`User ${user.name} added successfully.`);
    }

    // Thêm một sản phẩm
    addProduct(product) {
        this.listProducts.push(product);
        console.log(`Product ${product.name} added successfully.`);
    }

    // Lấy tất cả người dùng
    getAllUsers() {
        return this.listUsers;
    }

    // Lấy tất cả sản phẩm
    getAllProducts() {
        return this.listProducts;
    }

    // Tìm kiếm người dùng theo ID
    findUserById(userId) {
        return this.listUsers.find(user => user.userID === userId) || 'User not found';
    }

    // Tìm kiếm sản phẩm theo ID
    findProductById(productId) {
        return this.listProducts.find(product => product.productID === productId) || 'Product not found';
    }
}

// Sử dụng cơ sở dữ liệu hướng đối tượng
const db = new RDatabase();



async function fetchAndSaveData() {
    try {
        // Gọi API lấy danh sách người dùng
        const userResponse = await axios.get('http://localhost:8080/api/get-all-user?id=ALL');
        const productResponse = await axios.get('http://localhost:8080/api/get-all-product?id=ALL');

        // Xử lý dữ liệu người dùng

        userResponse.data.data.forEach(userData => {
            const user = new User(
                userData.userID,
                userData.name,
                userData.address,
                userData.username,
                userData.password,
                userData.phoneNumber,
                userData.avatar,
            );
            db.addUser(user);
        });



        // Xử lý dữ liệu sản phẩm
        productResponse.data.data.forEach(productData => {
            const product = new Product(
                productData.productID,
                productData.description,
                productData.image,
                productData.name,
                productData.price,
                productData.quantity,
                productData.productCategoryID,
            );
            db.addProduct(product);
        });

        console.log('Data fetched and saved successfully.');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
// Lấy danh sách người dùng
// console.log('All Users:', db.getAllUsers());

// // Lấy danh sách sản phẩm
// console.log('All Products:', db.getAllProducts());

// // Tìm người dùng theo ID
// console.log('Find User by ID:', db.findUserById(1));

// // Tìm sản phẩm theo ID
// console.log('Find Product by ID:', db.findProductById(1));
// console.log('File RDBDatabase.js đã được chạy!');


fetchAndSaveData().then(() => {
    // Hiển thị kết quả sau khi lưu
    console.log('All Users:', db.getAllUsers());
    console.log('All Products:', db.getAllProducts());
    console.log('Find Product by ID:', db.findProductById(1));
});