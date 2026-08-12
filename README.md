# Personal Task Management

Ứng dụng quản lý công việc cá nhân được xây dựng trong chương trình thực tập Web Full-stack.

## Công nghệ sử dụng

- Next.js App Router
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma ORM

## Chức năng

- Xem danh sách công việc
- Thêm công việc
- Sửa công việc
- Xóa công việc
- Tìm kiếm theo tiêu đề
- Lọc theo trạng thái
- Validation dữ liệu
- Không cho chọn hạn hoàn thành đã qua
- Loading state
- Empty state
- Error state
- Responsive trên điện thoại

## Database

Dự án sử dụng 4 bảng chính:

- Category
- Priority
- Task
- TaskHistory

Quan hệ:

- Category 1 - N Task
- Priority 1 - N Task
- Task 1 - N TaskHistory

## Cài đặt

Clone project:

```bash
git clone <repository-url>