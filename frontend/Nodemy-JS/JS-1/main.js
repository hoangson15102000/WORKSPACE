// CÁC KIỂU DỮ LIỆU - p1
console.log('// CÁC KIỂU DỮ LIỆU - p1')
var a;//undefined không được định nghĩa
console.log(a);
var b = null; // null không có ý nghĩa gì cả.
// string

console.log('FUNCTION');
//FUNCTION
function cong(number1, number2) {
    return number1 + number2;
}
var x = cong(1, 8);
console.log(x);

function caocap1() {
    return function () {
        return function () { }

    }
}
caocap1()()() // curry 
function caocap2(f1) {
    f1()
    return 9;
}

console.log('array method')
// array method
var arr1 = [1, 2, 3, 4];
console.log(arr1.push(5)); //push() thêm 5 vào cuối mảng và in ra phần tử thêm
console.log(arr1);

console.log(arr1.pop(5)); // pop() xóa phần tử cuối trên mảng và in ra phần tử bị xóa
console.log(arr1);

console.log(arr1.shift(5)); // shift() xóa phần tử đầu trên mảng và in ra phần tử bị xóa
console.log(arr1);

console.log(arr1.unshift(5)); // unshift() thêm phần tử đầu trên mảng và in ra phần tử thêm
console.log(arr1);

// splice
console.log(arr1.splice(0, 2)); // splice() xóa phần tử từ 0 đến 2
console.log(arr1);
//slice
console.log(arr1.push(5))
console.log('//slice')
console.log(arr1.slice(0, 2)); // splice() lấy phần tử từ 0 đến 2 
console.log(arr1);
// map .filter
// map() biến đổi mảng cũ thành mảng mới
arr2 = ['a', 'b', 'c', 'd'];
var newArr = arr2.map(function (item) {
    return 'chu cai ' + item;
})
console.log(newArr)


