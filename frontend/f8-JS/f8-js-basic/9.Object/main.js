// // object trong javascript gom key va value
var myInfo = {
    name: 'Hoang Son',
    age: 22,
    getName: function () {
        return this.name + ' Helo';
    },
    address: 'Ha Noi',
    getAge: function () {
        //phuong thuc
    },
    phone: '1001202001' // thuoc tinh


}
console.log(myInfo);
console.log(myInfo['age'])
// // thêm một cặp key và value sau khi object được tạo
myInfo.email = 'sonnh@fullstack@gmail.com';
myInfo['my-email'] = 'sonson';
// // Lấy value ra ngoài
console.log(myInfo.email);
console.log(myInfo['age'])
// // khi đặt 1 biến bằng key đó mà muốn gọi ra thì dùng nhưu sau
var aBcD = 'address';
console.log(myInfo[aBcD])
// // nếu tạo ra 1 biến var emailKey ='email' mà muốn cho key nó là email thì gọi như sau
// // [emailKey] : 'sonbeo@gmail.com' thì két quả hiện ra là email  : 'sonbeo@gmail.com'
// //  xóa key value dùng delete
delete myInfo.age;
console.log(myInfo)
// console.log(myInfo);
console.log(myInfo.getName());
// // -- phương thức function Method
// object là mô hình hóa 1 đối tượng có các đặc tính cụ thể
// // -- others --> thuộc tính property
// // OBJECT CONSTRUCTOR - xây dựng đối tượng,  tạo nên baen thiết kế cho đối tượng, nó giống như 1 bản thiết kế 
// console.log(' OBJECT CONSTRUCTOR - xây dựng đối tượng -part2')

function User(firstName, lastName, avatar) {
    this.firstName = firstName; // đối tượng đc khởi tạo này sẽ có thuộc tính firstName = tham số firstName truyền vào khi khởi tạo đối tượng

    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function () {
        return `${this.firstName} ${this.lastName};o
        }`
    }
}
var author = new User('Son', 'Dang', 'Avatar');
// Khai báo một object contructor với từ khóa new

// var author = new User('Son', 'Dang', 'Avatar');
var user = new User('Vu', 'Nguyen', 'Avatar');
console.log(author, user);
// console.log(user);
// console.log(author.getName());
// console.log(user);
// author.title = ' Chia sẻ dạo tại F8';
// user.comment = ' Liệu có khóa asp.net không ad'
// // object prototype - basic - đối tượng nguyên mẫu 
// // prototype - khuôn nguyên mẫu 
// console.log('object prototyoe - basic part 3');
// // coi object prototype là nguyên liệu lập nên ngôi nhà
// User.prototype.className = 'F8';
// User.prototype.getClassName = function () {
//     return this.className;
// }
// console.log(user.className);
// console.log(user.getClassName());
// // đối tượng date 
// console.log('ĐỐI TƯỢNG DATE PART 4')
// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth() + 1;

// var day = date.getFullYear();
// console.log(`${day} /${month} /${year}`);
// // Math object 
// console.log('Math Object part 5');
// /**
//  Math.PI
//  Math.round() làm tròn số
//  math.abs() absolute giá trị tuyệt đối
//  math.ceil() làm tròn lên trên
//  math.floor() làm tròn dưới
//  math.random() trả về một dãy số thập phân nhỏ hơn 1 
//  math.min() lấy ra con số nhỏ nhất
//  math.max() lấy ra con số lớn nhất ;
//  */
// console.log(Math.PI)
// var random = Math.floor(Math.random() * 5);//cái này để random từ số 0 đến 4
// console.log(random)
// var bonus = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin',
// ]
// console.log(bonus[random]);
// var random1 = Math.floor(Math.random() * 100);
// if (random1 < 40) {
//     console.log('Cường hóa thành công!')
// }
// else {
//     console.log('Thất bại rồi ')
// }
// // Vậy là có thể random theo tỷ lệ được rồi đố


