/**
 MẢNG trong JS
 1. Tạo mảng
 - cách tạo
 - sử dụng cách nào tại sao
 - kiểm tra datatype
 2. truy xuất mảng
 - độ dài mảng
 - lấy phần tử theo index
 - CHỨA TẤT CẢ các kiểu dữ liệu
 */
// var languages ='Javascript';
// var languages1 ='PHP';
// var languages2 ='Ruby';
var languages = [
    'JS',
    'PHP',
    'Ruby',
    'Dart',
    null,
    undefined,
    function () {

    },
    {}
];
console.log(languages)
console.log(languages[2]) //index danh tu dong tu 0 truy xuat ra theo index

var languagesn = new Array('JS',
    'PHP',
    'Ruby',
    null,
    undefined,
    function () {

    },
    {})
console.log(languagesn);
console.log(typeof languages)
//{} object [] array cung tra ve object
console.log(Array.isArray(languages))
// LÀM VIỆC VỚI MẢNG - PART2 - ARRAY
console.log('LÀM VIỆC VỚI MẢNG - PART2');
var language = [
    'JS',
    'PHP',
    'Lavarel',
    'Ruby'
]
console.log(language)
/**
 *1. to string bien doi thanh chuoi string
 */

console.log(language.toString())
console.log(typeof language.toString())
//2. join 
console.log(language.join(' add ')) // đã học biến chuỗi thành array thì dùng split còn array về chuỗi thì dùng join đó cu
// nếu truyền vào chuỗi rỗng ' ' nó sẽ hiểu là thêm vào giữa các string

// 3.pop Xóa đi phần tử cuối mảng và trả lại chính phần tử đã xóa đó
console.log(language.pop())
console.log(language);

//4. push để THÊM phần tử vào cuối mảng 1 hoặc nhiều phần tử và trả về độ dài mới của mảng
console.log(language.push('Dart', 'Java'));
console.log(language);
//5.shift xóa đi phần tử đầu mảng và trả về phần tử đã xóa
console.log(language.shift())
console.log(language);
//6.unshift thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng
console.log(language.unshift('NHS'))
console.log(language);
//7. splicing xóa cắt hoặc chèn phần tử mới vào mảng
console.log(language.splice(1, 1))
console.log(language);
console.log(language.splice(1, 0, 'dart'))
console.log(language);
//tham số thứ 1 đặt vào đâu tham số thứ 2 xóa mấy phần tử :<
//8.concat để nối array
var language3 = [
    'sol',
    'sol1',

]
console.log(language.concat(language3));
//9. slicing 
console.log(language.slice(1, 3));

