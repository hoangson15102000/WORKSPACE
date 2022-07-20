/**
Kiểu số number trong Javascript
1. Tạo các giá trị number
- các cách tạo
- dùng cách nào ? tại sao?
- kiểm tra data type
2. Làm việc với number
- to string
- to fixed // với giá trị <0.5 làm tròn về còn trên thì làm tròn lên !!!
 */
var age = 18;
var PI = 3.14;
var PI2 = 300000000.62626;
// var otherNumber = new Number(9);
// console.log(age + PI / 2000000);
// console.log(typeof otherNumber); //đéo ngu gì sử dụng vì type of ra object

var result = 20 / 'ABC';
console.log(result) // NaN đại diện cho kiểu số không hợp lệ , type of vẫn là number :)
// check xem có phải NaN khong
console.log(isNaN(result))
// Javascript number method 
console.log(typeof age.toString());
// to fix lam tron so
console.log(PI.toFixed());
console.log(typeof PI.toFixed());
console.log(PI2.toFixed(2));
