# TEST CASES

## TC01 - Thêm công việc hợp lệ
- Nhập đầy đủ thông tin hợp lệ
- Kết quả mong đợi: thêm thành công và hiển thị ở trang chủ

## TC02 - Tiêu đề để trống
- Không nhập tiêu đề
- Kết quả mong đợi: không cho submit

## TC03 - Tiêu đề dưới 3 ký tự
- Nhập tiêu đề: AB
- Kết quả mong đợi: báo lỗi validation

## TC04 - Chọn ngày đã qua
- Chọn dueDate nhỏ hơn ngày hiện tại
- Kết quả mong đợi: không cho lưu

## TC05 - Sửa công việc
- Thay đổi tiêu đề, trạng thái hoặc mức ưu tiên
- Kết quả mong đợi: dữ liệu cập nhật thành công

## TC06 - Xóa công việc
- Chọn một công việc và bấm Xóa
- Kết quả mong đợi: công việc bị xóa khỏi database

## TC07 - Tìm kiếm có kết quả
- Nhập từ khóa tồn tại trong tiêu đề
- Kết quả mong đợi: chỉ hiển thị công việc phù hợp

## TC08 - Tìm kiếm không có kết quả
- Nhập từ khóa không tồn tại
- Kết quả mong đợi: hiện "Không tìm thấy công việc nào"

## TC09 - Lọc trạng thái
- Chọn trạng thái "Chưa làm"
- Kết quả mong đợi: chỉ hiển thị task có trạng thái TODO

## TC10 - Responsive
- Thu nhỏ trình duyệt về kích thước điện thoại
- Kết quả mong đợi: giao diện không bị tràn ngang