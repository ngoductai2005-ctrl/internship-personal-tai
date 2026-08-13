# BÁO CÁO TUẦN 3

## 1. Mục tiêu

- Hoàn thiện Personal Task Management.
- Hoàn thiện giao diện responsive.
- Thực hiện tìm kiếm và lọc công việc.
- Hoàn thiện Loading, Empty và Error State.
- Viết test case.
- Hoàn thiện README.
- Kiểm tra production build.
- Deploy ứng dụng lên Vercel.
- Hoàn thiện chức năng đăng nhập và phân quyền mở rộng.

## 2. Kiến thức đã tìm hiểu

### Chủ đề

- Search và Filter với Prisma.
- Responsive Design.
- Next.js Loading State.
- Next.js Error Boundary.
- Authentication.
- bcrypt.
- JWT.
- jose.
- Cookie và Session.
- Authorization phía server.
- Vercel Deployment.
- Environment Variables.
- Production Build.
- Test Case.

### Nguồn tài liệu

- Next.js Documentation.
- Prisma Documentation.
- Vercel Documentation.
- Tailwind CSS Documentation.
- Tài liệu thực tập Kyanon.

### Nội dung đã hiểu

- Prisma `where` có thể kết hợp nhiều điều kiện tìm kiếm và lọc.
- `loading.tsx` được Next.js tự động sử dụng khi route đang tải.
- `error.tsx` dùng để xử lý lỗi của route.
- Mật khẩu không nên lưu trực tiếp mà phải hash trước khi lưu database.
- bcrypt có thể hash và compare mật khẩu.
- JWT có thể lưu thông tin cần thiết của session.
- Cookie được sử dụng để duy trì trạng thái đăng nhập.
- Authorization phải được kiểm tra phía server, không chỉ ẩn nút trên giao diện.
- Environment Variables production phải được cấu hình trên Vercel.
- `npm run build` giúp phát hiện lỗi production trước khi deploy.

## 3. Công việc đã hoàn thành

### Issue/PR

#### Search và Filter

- Tìm kiếm task theo tiêu đề.
- Lọc theo TODO.
- Lọc theo IN_PROGRESS.
- Lọc theo COMPLETED.
- Kết hợp Search và Filter.

#### UI/UX

- Cập nhật giao diện Dashboard.
- Responsive trên desktop và mobile.
- Empty State.
- Skeleton Loading.
- Error State.
- Thông báo thêm thành công.
- Thông báo sửa thành công.
- Thông báo xóa thành công.
- Xác nhận trước khi xóa task.

#### Authentication

- Tạo model User.
- Đăng ký.
- Đăng nhập.
- Đăng xuất.
- Hash mật khẩu bằng bcrypt.
- JWT session bằng jose.
- Validation Login/Register.

#### Authorization

Hệ thống có:

- USER.
- ADMIN.

USER:

- Chỉ xem task của mình.
- Chỉ sửa task của mình.
- Chỉ xóa task của mình.

ADMIN:

- Có thể xem toàn bộ task.
- Có thể xem danh sách người dùng.
- Có trang quản trị người dùng.

Authorization được kiểm tra phía server.

#### Testing và Documentation

- Viết test case cho Authentication.
- Viết test case cho Authorization.
- Viết test case CRUD.
- Viết test Search/Filter.
- Viết test UI/UX.
- Hoàn thiện README.
- Hoàn thiện ERD.
- Kiểm tra production build.

### Preview URL

- Repository GitHub: [điền link GitHub]
- Production URL: [điền link Vercel]

### Kết quả

Production build đã chạy thành công:

`npm run build`

Các route chính:

- `/`
- `/auth/login`
- `/auth/register`
- `/tasks/create`
- `/tasks/[id]/edit`
- `/admin`
- `/admin/users`

Ứng dụng sử dụng PostgreSQL thật và đã được triển khai lên Vercel.

## 4. Khó khăn và blocker

### Vấn đề

- Prisma báo lỗi relation do `UserId` và `userId` không thống nhất.
- Prisma Client chưa nhận model User sau khi thay đổi schema.
- Import Server Action sai đường dẫn.
- Thiếu package `jose`.
- USER ban đầu vẫn nhìn thấy task của người khác.
- Kiểm tra quyền edit ban đầu đặt trước khi lấy `task`.
- Cần chặn USER sửa/xóa task người khác ở server.
- Gặp vấn đề Git repository khi push thay đổi.
- Vercel deployment ban đầu gặp lỗi.
- Production cần cấu hình đúng Environment Variables.
- Đăng nhập production cần kiểm tra database và session riêng với localhost.

### Cách đã thử

- Sửa `UserId` thành `userId`.
- Chạy `npx prisma generate`.
- Chạy Prisma migration.
- Sửa đường dẫn import.
- Cài `jose`.
- Thêm `userId` vào điều kiện lấy task.
- Kiểm tra ownership trước khi update/delete.
- Sử dụng session role USER/ADMIN.
- Kiểm tra `npm run build` trước khi deploy.
- Push commit mới lên GitHub.
- Redeploy Vercel.
- Cấu hình `DATABASE_URL` và `SESSION_SECRET` cho production.

### Hỗ trợ cần thiết

- Tiếp tục kiểm thử toàn bộ production.
- Chuẩn bị demo trực tiếp.
- Chuẩn bị giải thích kiến trúc, database, authentication và authorization.

## 5. AI Usage Log

### Công cụ

- ChatGPT.

### Prompt/vấn đề

AI được sử dụng để hỗ trợ:

- Phân tích lỗi Prisma.
- Sửa relation User - Task.
- Giải thích Server Actions.
- Hướng dẫn Authentication.
- Hướng dẫn bcrypt.
- Hướng dẫn JWT Session bằng jose.
- Kiểm tra Authorization.
- Hướng dẫn Search/Filter.
- Cải thiện giao diện.
- Tạo Loading/Error State.
- Kiểm tra test case.
- Hoàn thiện README.
- Phân tích lỗi Git.
- Hỗ trợ cấu hình Vercel.

### File/chức năng

- `prisma/schema.prisma`.
- `lib/prisma.ts`.
- `lib/session.ts`.
- `app/auth/actions.ts`.
- `app/auth/login/page.tsx`.
- `app/auth/register/page.tsx`.
- `app/tasks/actions.ts`.
- `app/tasks/create/page.tsx`.
- `app/tasks/[id]/edit/page.tsx`.
- `app/page.tsx`.
- `app/admin/page.tsx`.
- `app/admin/users/page.tsx`.
- `app/loading.tsx`.
- `app/error.tsx`.
- `components/DeleteTaskButton.tsx`.
- `README.md`.
- `test-cases.md`.

### Cách kiểm chứng

Không sử dụng kết quả AI mà không kiểm tra.

Các bước kiểm chứng:

- Đọc lại code được đề xuất.
- Chạy project bằng `npm run dev`.
- Kiểm tra chức năng trực tiếp trên trình duyệt.
- Kiểm tra dữ liệu PostgreSQL.
- Test USER và ADMIN bằng các tài khoản khác nhau.
- Test USER không truy cập dữ liệu của USER khác.
- Chạy `npm run build`.
- Kiểm tra deployment trên Vercel.
- Kiểm tra lại production sau deployment.

## 6. Kế hoạch tuần sau

- Kiểm thử production lần cuối.
- Hoàn thiện video/demo dự án cá nhân.
- Chuẩn bị trình bày luồng full-stack.
- Chuẩn bị giải thích ERD và database.
- Chuẩn bị giải thích authentication và authorization.
- Hoàn tất việc nộp dự án cá nhân.
- Chuyển sang nhiệm vụ tiếp theo của chương trình thực tập.

## 7. Tự đánh giá đóng góp

- Hoàn thành luồng full-stack của Personal Task Management.
- Hoàn thành kết nối PostgreSQL thật.
- Hoàn thành CRUD, Search, Filter và Validation.
- Hoàn thiện responsive và các trạng thái Loading/Empty/Error.
- Hoàn thành Authentication và Authorization như chức năng mở rộng.
- Có kiểm tra quyền phía server thay vì chỉ xử lý giao diện.
- Hoàn thành test case và README.
- Production build chạy thành công.
- Đã đưa source code lên GitHub và triển khai ứng dụng bằng Vercel.
- Có thể giải thích các phần chính đã thực hiện và các lỗi đã gặp trong quá trình phát triển.