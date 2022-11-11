var storage = require('node-persist');
// Hàm khởi tạo 
// Load dữ liệu đã lưu trên ổ đĩa
storage.initSync({
    dir: 'students'  /// cấu hình nơi lưu trữ dữ liệu trong thư mục students
})

// hàm lấy danh sách sinh viên 
function getAllStudents() {
    // lấy sinh viên từ nơi lưu trữ
    var students = storage.getItemSync('students');
    // nếu ko có sinh viên nào thì trả về mảng rỗng
    if (typeof students === 'undefined') {
        return [];
    }
    return students;
}


// Hàm lấy chi tiết sinh viên 
function getStudent(studentId) {
    // lấy danh sách sinh viên đã 
    var students = getAllStudents();
    // biến lưu trữ sinh viên được tìm thấy
    var matchedStudent = null;
    // Lặp để tìm sinh viên 
    for (var i = 0; i < students.length; i++) {
        if (students[i].id === studentId) {
            matchedStudent = students[i];
            break;
        }
    }
    return matchedStudent;

}
// Hàm thêm 1 sinh viên 
function addStudent(id, fullname) {
    var students = getAllStudents();
    students.push({
        id: id,
        fullname: fullname
    });
    storage.setItemSync('students', students);


}
// Hàm xóa sinh viên
function removeStudent(studentId) {

    var students = getAllStudents();

    for (var i = 0; i < students.length; i++) {
        if (students[i].id === studentId) {
            students.splice(i, 1);
        }
    }

    storage.setItemSync('students', students);
}

// Hàm sửa sinh viên
function editStuent(studentId, studentName) {
    var students = getAllStudents();

    for (var i = 0; i < students.length; i++) {
        if (students[i].id === studentId) {
            students[i].fullname = studentName;
        }
    }

    storage.setItemSync('students', students);

}

// Hàm hiển thị danh sách sinh viên
function showStudents() {
    var students = getAllStudents();
    students.forEach(student => {
        console.log('student:' + student.fullname + '(' + student.id + ')');

    });

}
// Thêm sinh viên
addStudent(1, 'Cuong');
addStudent(2, 'Kinh');
addStudent(3, 'Chinh');
addStudent(4, 'Quyen');
removeStudent('1');

// Hiển thị danh sách sinh viên
showStudents();