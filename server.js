// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const uri = 'mongodb://localhost:27017/admin';
const cloudinary = require('cloudinary').v2;

const mongoose = require('mongoose');
// connect to DB
mongoose.connect(uri, {})
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch(err => {
        console.error('Connected to MongoDB error:', err);
    });




// Cấu hình Cloudinary
cloudinary.config({
    cloud_name: 'dg9cq7fqg',
    api_key: '467257282897346',
    api_secret: 'Ej-l0a-4s68G1YZ1E7ennytFymc'
});



// Import route từ file route.js
const routes = require('./src/routes/mainRoute');
app.use(express.json()); // Để phân tích dữ liệu JSON
app.use(express.urlencoded({ extended: true }));
// Sử dụng các route được import
app.use('/', routes);

app.listen(PORT, () => {
    console.log('Backend nodejs is listening on port ' + PORT);
});