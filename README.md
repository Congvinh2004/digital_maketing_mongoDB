# **Hướng dẫn cài đặt dự án**

## **1.1 Giới thiệu**
- Dự án Digital Marketing mongoDB là một mô hình back-end server được phát triển bằng ngôn ngữ JavaScript.
  Mô hình này dùng để kết nối tới cơ sở dữ liệu mongoDB, quản lý và lưu trữ dữ liệu metadata và Multimedia của các đối tượng trong một ứng dụng Thương mại điện tử.
## **1.2 Tính năng chính**
- Quản lý lưu trữ dữ liệu metadata và Multimedia của các đối tượng trong một ứng dụng Thương mại điện tử

## **1.3 Công nghệ sử dụng**
- Ngôn ngữ lập trình: JavaScript
- Framework: Node.js, Express.js
- Cơ sở dữ liệu: MongoDB

## **2. Yêu cầu hệ thống**
- **Phần cứng:**
  - CPU: Bộ xử lý đa nhân, tốc độ tối thiểu 2.0 GHz
  - RAM: Tối thiểu 4 GB
  - Ổ đĩa trống: Tối thiểu 5 GB
- **Phần mềm:**
  - **Hệ điều hành:**
    - Windows 10 hoặc mới hơn
    - macOS 10.15 Catalina hoặc mới hơn
    - Các bản phân phối Linux phổ biến (Ubuntu 20.04+, CentOS 8+, v.v.)
  - **Các phần mềm hoặc thư viện cần thiết:**
    - MongoDB (Hệ quản trị cơ sở dữ liệu)
    - Visual Studio Code (Trình biên dịch code)
    - NVM (để quản lý các phiên bản của Node.js)
    - Node.js
    - npm (đi kèm với Node.js)
    - Git (Là một hệ thống quản lý mã nguồn phân tán)
## **3. Cài đặt các công cụ và thư viện cần thiết**

- **Công cụ:**
  - **Cách cài đặt MongoDB:
    - Dowload từ trang chủ của MongoDB `https://www.mongodb.com/try/download/community`
  - **Cách cài đặt NVM (phiên bản 1.1.12)**:
    - Xóa toàn bộ phiên bản NodeJs đã cài trên máy.
    - Lưu ý: cần note lại tên phiên bản đã cài trước đó để cài đặt lại nếu cần thiết để chạy các dự án khác.
    - Kiểm tra máy tính đã cài đặt NVM chưa bằng cách:
      - mở cmd trên máy tính và chạy với quyền quản trị viên
      - chạy lệnh
         ```bash
        nvm
      - Nếu chưa cài, tiến hành cài đặt trên trang chủ của github:
         ```bash
        https://github.com/coreybutler/nvm-windows/releases/tag/1.1.12
      - Nếu đã cài thì sẽ thấy phiên bản của NVM hiện trên màn hình,
        ví dụ:
        ```env
        Running version 1.1.12.
    - Kiểm tra phiên bản NVM, nếu không phải 1.1.12, tiến hành gỡ bằng lệnh với cmd:
         ```bash
        nvm uninstall
    - Sau đó cài đặt lại NVM version 1.1.12 như ở trên.
  - Sau khi cài đặt xong, kiểm tra lại bằng các nhập:
    ```bash
    nvm
  Trên màn hình hiện đúng phiên bản NVM 1.1.12 là đã cài thành công.

  
 - **Cách cài đặt NodeJs (phiên bản 20.9.0)**:
    - Sau khi đã cài NVM, tiến hành cài NodeJs version 20.9.0 bằng cách:
      ```bash
      nvm install 20.9.0

    - Chờ cho tới khi thông báo đã cài đặt thành công
    - Kiểm tra xem đã cài thành công hay chưa, nhập lệnh sau và nhấn Enter:
      ```bash
      node -v
    - Kết quả: Lệnh trên sẽ hiển thị phiên bản Node.js đang được cài đặt, ví dụ:
      ```bash
      v20.9.0
- **Cách cài đặt Git**:
- Kiểm tra xem máy tính đã được cài Git hay chưa:
  ```bash
  git --version
Nếu chưa cài, bạn có thể tải Git từ git-scm.com và cài đặt.


## **4. Tải xuống mã nguồn**
**a. Chuẩn bị**:
- Đảm bảo bạn đã cài đặt Git trên máy tính. Kiểm tra bằng lệnh:
  ```bash
  git --version
- Nếu chưa cài, bạn có thể tải Git theo bước 3.

**b. Clone Project**:

1. **Mở Terminal hoặc Command Prompt**.
2. Điều hướng đến thư mục mà bạn muốn chứa project (nếu cần):
   ```bash
   cd đường_dẫn_thư_mục
   ```
   Hoặc tạo 1 thư mục chứa project, ấn chuột phải vào thư mục chọn lệnh "Git Bash Here"
3. Chạy lệnh clone:
   ```bash
   git clone https://github.com/Congvinh2004/digital_maketing_mongoDB
   ```
4. Clone xong kiểm tra
- Sau khi clone xong, bạn sẽ có một thư mục với tên của repository chứa toàn bộ project.

## **5. Cấu hình dự án**
**a. Tạo Database: 
  - Vào MongoDB tạo 1 Connection, đặt tên bất kì, Ví dụ: `Digital_Marketing`
**b. Cách thiết lập tệp cấu hình**
   - tìm đến file `server.js` trong thư mục root của project, tại biến `uri` thay đường dẫn kết nối tương ứng:
     ```bash
     [connection_string]/[admin]
   - Ví dụ:
     ```bash
     const uri = 'mongodb://localhost:27017/admin';
           
  
## **6. Chạy dự án**
- Chạy lệnh `npm install` để cài đặt các gói package của dự án.
- Sau khi cài đặt xong, sẽ thấy thư mục `node_modules`. Trường hợp chưa thấy, cần kiểm tra và cài đặt lại.
- Hướng dẫn khởi động dự án, nhập lệnh:
    ```bash
    npm start
    ```
## **7. Kiểm tra và xác minh**

- Cách kiểm tra xem dự án đã chạy thành công chưa:
  - Xem log ở terminal, ví dụ:
    ```bash
    Connected to MongoDB successfully.
    Backend nodejs is listening on port 3001
  là đã chạy thành công.
- Kiểm tra kết quả truy vấn metadata:
  - Mở MongoDB và check data lưu trữ.
 
- Kiểm tra kết quả lưu trữ Multimedia:
- truy cập giao diện quản lý của Cloudinary để kiểm tra thư mục và ảnh:
  - Đăng nhập vào Cloudinary.
  - Vào tab Media Explorer.
  - Xem thư mục Image_Project và kiểm tra các ảnh đã được upload.
  

## **8. Các vấn đề thường gặp**
- Danh sách các lỗi phổ biến và cách khắc phục:
  - **Lỗi:** Không thể kết nối tới database.
    - **Cách xử lý:** Kiểm tra thông tin cấu hình trong file `server.js`.
  - **Lỗi:** Thư viện không tải được.
    - **Cách xử lý:** Chạy lại lệnh cài đặt:
      ```bash
      npm install
      ```
  - **Lỗi:** Không upload được ảnh lên Cloudinary.
      - **Cách xử lý:** Kiểm tra xem link hình ảnh đã đúng chưa, có thừa kí tự khoảng trắng hay kí tự đặt biệt nào không:
       
## **9. Tài liệu tham khảo**

- Tài liệu hướng dẫn sử dụng SSMS: `https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16`
- Trang chủ MongoDB: `https://www.mongodb.com`

## **10. Liên hệ hỗ trợ**
- Email: 4801104148@student.hcmue.edu.vn
