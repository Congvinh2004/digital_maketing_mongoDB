// server.js
const express = require('express');
const app = express();
const port = 3000;

// Import route từ file route.js
const routes = require('./src/routes/mainRoute');
app.use(express.json()); // Để phân tích dữ liệu JSON
app.use(express.urlencoded({ extended: true }));
// Sử dụng các route được import
app.use('/', routes);

app.listen(port, () => {
    console.log('Backend nodejs is listening on port ' + port);
});