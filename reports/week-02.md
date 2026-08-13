# BÁO CÁO TUẦN 2

## 1. Mục tiêu

- Kết nối ứng dụng với PostgreSQL.
- Sử dụng Prisma ORM để thao tác database.
- Thiết kế và triển khai database cho Personal Task Management.
- Hoàn thành CRUD công việc.
- Xây dựng Category và Priority.
- Thực hiện validation dữ liệu.
- Lưu dữ liệu thật vào database.

## 2. Kiến thức đã tìm hiểu

### Chủ đề

- PostgreSQL.
- Neon PostgreSQL.
- Prisma ORM.
- Prisma Schema.
- Migration.
- Prisma Client.
- Quan hệ giữa các model.
- Next.js Server Actions.
- CRUD.
- Validation phía server.

### Nguồn tài liệu

- Prisma Documentation.
- PostgreSQL Documentation.
- Next.js Documentation.
- Neon Documentation.
- Tài liệu thực tập Kyanon.

### Nội dung đã hiểu

- Prisma Schema dùng để mô tả cấu trúc database.
- `@id` xác định khóa chính.
- `@default(autoincrement())` tạo ID tự tăng.
- `@relation` dùng để khai báo quan hệ giữa các model.
- Prisma Client cung cấp các hàm như `findMany`, `findUnique`, `create`, `update`, `delete`.
- Migration dùng để đồng bộ thay đổi schema với PostgreSQL.
- Server Actions cho phép xử lý form phía server.
- `revalidatePath()` cập nhật lại dữ liệu giao diện sau khi thay đổi database.
- Validation phía server vẫn cần thiết ngay cả khi form đã có `required`.

## 3. Công việc đã hoàn thành

### Issue/PR

- Kết nối PostgreSQL.
- Thiết lập Prisma ORM.
- Xây dựng Prisma Schema.
- Tạo migration.
- Tạo dữ liệu Category.
- Tạo dữ liệu Priority.
- Xây dựng model Task.
- Xây dựng TaskHistory.
- Hiển thị danh sách công việc.
- Thêm công việc.
- Sửa công việc.
- Xóa công việc.
- Validation tiêu đề.
- Validation hạn hoàn thành.

### Preview URL

- Kiểm thử chủ yếu trên localhost.
- Database sử dụng PostgreSQL thật.

### Kết quả

Hoàn thành luồng CRUD:

`Create → Read → Update → Delete`

Task có các thông tin:

- Tiêu đề.
- Mô tả.
- Danh mục.
- Mức ưu tiên.
- Trạng thái.
- Hạn hoàn thành.

Các trạng thái:

- TODO.
- IN_PROGRESS.
- COMPLETED.

Validation đã thực hiện:

- Tiêu đề không được để trống.
- Tiêu đề tối thiểu 3 ký tự.
- Phải chọn hạn hoàn thành.
- Không cho chọn ngày đã qua.

## 4. Khó khăn và blocker

### Vấn đề

- Chưa quen cú pháp Prisma Schema.
- Gặp lỗi khi quan hệ sử dụng tên field không thống nhất.
- Cần đồng bộ Prisma Client sau khi thay đổi schema.
- Cần xử lý quan hệ dữ liệu khi xóa Task.
- Validation ngày cần thực hiện đúng thứ tự.

### Cách đã thử

- Kiểm tra lại `schema.prisma`.
- Sử dụng `npx prisma generate`.
- Sử dụng Prisma migration để đồng bộ database.
- Kiểm tra dữ liệu trực tiếp trong database.
- Thử từng chức năng CRUD riêng biệt.
- Kiểm tra trường hợp dữ liệu hợp lệ và không hợp lệ.

### Hỗ trợ cần thiết

- Tiếp tục tìm hiểu authentication và authorization.
- Hoàn thiện giao diện và responsive.
- Tìm hiểu cách deploy ứng dụng lên Vercel.

## 5. AI Usage Log

### Công cụ

- ChatGPT.

### Prompt/vấn đề

- Giải thích Prisma Schema.
- Sửa lỗi quan hệ Prisma.
- Hướng dẫn migration.
- Hướng dẫn CRUD bằng Prisma Client.
- Kiểm tra validation.
- Hỗ trợ sửa lỗi TypeScript.

### File/chức năng

- `prisma/schema.prisma`.
- `lib/prisma.ts`.
- `app/page.tsx`.
- `app/tasks/actions.ts`.
- `app/tasks/create/page.tsx`.
- `app/tasks/[id]/edit/page.tsx`.

### Cách kiểm chứng

- Chạy Prisma migration.
- Chạy `npx prisma generate`.
- Kiểm tra database.
- Thêm task và kiểm tra dữ liệu.
- Sửa task và reload trang.
- Xóa task và kiểm tra database.
- Thử nhập tiêu đề ngắn và ngày đã qua.

## 6. Kế hoạch tuần sau

- Hoàn thiện giao diện.
- Responsive cho mobile.
- Thêm Search và Filter.
- Hoàn thiện Loading, Empty và Error State.
- Viết test case.
- Viết README.
- Kiểm tra production build.
- Deploy lên Vercel.
- Hoàn thiện các chức năng mở rộng nếu còn thời gian.

## 7. Tự đánh giá đóng góp

- Hoàn thành database và CRUD chính của ứng dụng.
- Có thể giải thích luồng từ form → Server Action → Prisma → PostgreSQL.
- Đã thực hiện validation thay vì chỉ tập trung vào trường hợp dữ liệu đúng.
- Chủ động kiểm tra lỗi và sửa từng phần trước khi tiếp tục chức năng khác.