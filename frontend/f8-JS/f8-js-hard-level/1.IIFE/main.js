/// function expressiong



(function () {
               console.log('NOW')
})();
// nội dung
// đây là iife
(function () {
               console.log('NOW')
})();
// phải có dấu ; trước nó

// IIFE là 1 hàm private - riêng tư, không thể truy cập ngoài phạm vi
// IIFE được sử dụng như nào ?
// Sử dụng với những đoạn mã muốn chạy ngay lập tức
// muốn chạy code ngay :?
// Khi trong dự án lớn thì hay bị trùng biến global , khi sử dụng IIFE
// các bạn sẽ nhận thấy viết ra trong IIFE là trong phạm vi đó không lo bị trùng biến nữa.
// Sử dụng khi muốn che giấu tên hàm tên biến


