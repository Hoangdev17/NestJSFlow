# NestJSFlow

   Description:
     Flow của endpoint: (login)
        + Trước khi request vào server thì sẽ thực hiện middleware (ở đây là log ra http status code và url)
        + Sau khi thực hiện middleware sẽ vào lớp Guard (ở đâu là roleGuard , nó sẽ verify quyền truy cập)
        + Nếu qua Guard thành công sẽ vào interceptor để can thiệp vào request gửi lên (ở đây log ra thời gian thực hiện request)
        + Sau đó sẽ thực hiện pipe (ở đây dùng ValidationPipe của nestJS để validate dữ liệu gửi lên, sử dụng kết hợp với class-validator)
        + Qua bước pipe sẽ có 2 hướng:
           - Nếu thành công sẽ đi vào App module (controller, service, ) sẽ thực hiện các logic để login
           - Nếu ko thành công sẽ đi vào Epxeption filter để bắt các lỗi catch ( ở đây log ra các lỗi catch nếu có bất kì lỗi nào liên quan đến exeption)
        => Sơ đồ flow: 
            Client(request) --> Middleware --> Guard --> Interceptor --> Pipe --> AppModule -->  Client
                                                                                    |
                                                                                    |
                                                                                Exception filter   