
//ECMA là một quy chuẩn , tạo ra quy chuẩn cho JS

// 1. Let , const thay thế var trong các biến 
// var/let,const : khác nhau về scope ( phạm vi truy cập vào biến), hosting
// const / var và let: assignment gán lại giá trị biến
// code block: if else , loop, {}
if (true) {
    var course = ' JS'
}
console.log(course)
// nếu let, const thì không đc in ra vì k trong phạm vi
// hosting : var a =1; nhắc định nghĩa lên đầu, let const thì ko.


// const / var và let: assignment gán lại giá trị biến
// const không gán được lần thứ 2 nhé
const b = {
    name: 'JS'
}
b.name = 'PHP';
console.log(b)
// Vẫn thay đổi được thuộc tính nhé
// Code thuần : var
// có sử dụng thư viện babel sưt dụng thuần là const và let
// khi định nghĩa biến và không gán lại biến đó.
// khi cần gán lại giá trị cho biến thì dùng let




// 2. Template literals
const courseName = 'Javascript';
const description = `Course name: ${courseName}`;
console.log(description)
// 3. Multi-line string viết nhiều dòng
// const lines = 'Line 1\nLine 2';
const lines = `line 1
line 2 
line 4`
console.log(lines)

// 4. arrow function  hàm mũi tên
const logger = (log) => {
    console.log(log)
}
logger('Message');
const sum = (a, b) => a + b; // không có dấu {} thì return luôn 
console.log(sum(2, 2));
const sum1 = (a, b) => ({ a: a, b: b });
console.log(sum1(2, 2));
// 
const course1 = {
    name: 'JS basic',
    getName: function () {
        return this.name;
    }
}
console.log(course1.getName())

//classes
// bình thường sẽ sử dụng object constructor nên là class viết gọn hơn thôi
// function Course(name, price) {
//     this.Ten = name;
//     this.Gia = price;
// }
class Course {
    constructor(name, price) {
        this.ten = name;
        this.gia = price;
    }
}
const phpCourse = new Course('PHP', 2000)
const JSCourse = new Course('Javascript', 3000)
console.log(phpCourse);
console.log(JSCourse);

//// Default parameter value dùng cho hàm tham số k bắt buộc  phải nhập
function logger1(log, type = 'log') {
    console[type](log);
}
logger1('Message ...');


/// Enhanced object literals
// định nghĩa key value cho objects
// định nghĩa method cho objects
// định nghĩa key cho object dưới dạng biến


var name = 'JS';
var price = 1000;
var course = {
    name,
    price,
    // getName: function () {
    //     return this.name;
    // }
    getName() {
        return this.name;
    }
}

console.log(course);
console.log(course.getName());

var fieldName = 'name';
var fieldPrice = 'price';
const courseaaa = {
    [fieldName]: 'Js',
    [fieldPrice]: 10000

}
console.log(courseaaa)

/// Destructuring phân rã với object array
var newArr = ['Javascript', 'PHp', 'Ruby'];
var [aa, bb, cc] = newArr;
console.log(bb, cc, aa);
var [aa, ...rest] = newArr;
console.log(rest);

//object
var khoahoc = {
    ten: 'JSSS',
    gia: 10000,
    children: {
        ten: 'Reactjs'
    }
}
var { ten: parentname, gia, children: { ten }, description1 = 'default des value' } = khoahoc;
console.log(ten, gia, description1)