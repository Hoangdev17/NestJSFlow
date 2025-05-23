# NestJS Flow

1. Middlewar
   - Thực hiện trước khi request vào hệ thống.
   - Log HTTP status code và URL của request.

2. Guard
   - Kiểm tra quyền truy cập của người dùng.
   - Ở đây sử dụng `RoleGuard` để xác minh vai trò (role) người dùng.

3. Interceptor
   - Can thiệp vào request trước khi đến controller.
   - Log lại thời gian thực hiện request.

4. Pipe (Validation)
   - Xử lý và kiểm tra dữ liệu gửi lên từ client.
   - Dùng `ValidationPipe` của NestJS kết hợp với `class-validator` để validate dữ liệu

5.Xử lý logic trong App Module
   - Nếu dữ liệu hợp lệ, request sẽ được xử lý trong Controller, Service để thực hiện logic `login`.

6. Exception Filter
   - Nếu có lỗi xảy ra ở bất kỳ bước nào phía trên, Exception Filter sẽ bắt và log lỗi chi tiết.

 => Sơ đồ flow: 
         Client(request) --> Middleware --> Guard --> Interceptor --> Pipe --> AppModule -->  Client
                                                                                    |
                                                                                    |
                                                                                Exception filter
----
