// các kiểu dữ liệu trong javascript
/**
 * 1. Kiểu dữ liệu nguyên thủy
 * number
 * string
 * boolean
 * undefined
 * null
 * symbol
 * 2. dữ liệu phức tạp - complex data
 * function
 * object
 */
var a = 1;
// tạo ra giá trị 1 và lưu vào vùng nhớ, lưu tạm trong ram.
a = 2; // vùng nhớ khác tạo ra và lưu trong vùng nhớ mới nhé :)
// phức tạp
// fucntion and object ( array và object) mang nhiều thuộc tính phức tạp
console.log(a);

// number
var a = 1;
console.log(typeof a)
// string
var son = 'Son "Dang';
console.log(son)
console.log(typeof son)
// boolean
var isHoangSon = 10 > 2;
console.log(isHoangSon);
console.log(typeof isHoangSon)
//undefined là không gán giá trị gì nhá
var age;
console.log(age);
//null là nothing không có gì nhá 
var isNull = null;
// console.log(isNull)

// 
console.log(typeof isNull)// type off null ra object
// Symbol
var id = Symbol("id"); // unique
var id2 = Symbol("id");
console.log(id)
console.log(typeof id)
// Kiểu dũ liệu phức tạp
// fucntion
var myFunction = function () {
    alert('Hello world');
}
console.log(typeof myFunction)

// object types
var myObject = {
    name: 'Son',
    age: '22',
    sex: 'male',
    address: 'Hanoi'
}
console.log(typeof myObject)
console.log(myObject)
// array
var myArray = [
    '1', '2', '3'
]
console.log(myArray)
