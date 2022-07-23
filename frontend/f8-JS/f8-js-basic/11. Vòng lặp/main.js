/**
 * Vòng lặp - loop
 * 1. for - lặp với điều kiện đúng
 * 2. for / in - lặp qua key của đối tượng có thể là array , object , string.
 * 3. for / of - lặp qua value của đối tượng có thể là array , object , string.
 * 4. while - lặp khi điều kiện đúng
 * 5. do /while - lặp ít nhất 1 lần , sau đó lặp khi điều kiện đúng.
 */

console.log('FOR LOOP - PART 1')
for (let i = 1; i <= 1; i++) {
    console.log(i)
}
// có thể để trống var i = 1; i<=1000 cũng không bắt buộc ; i++ cũng không bắt buộc :)
// ứng dụng vòng lặp for lấy phần tử ra một mảng
var myArray = [
    'js',
    'php',
    'java',
    'dart']
var dodaimang = myArray.length;
for (var j = 0; j < dodaimang; j++) {
    console.log(myArray[j]);
}
// Vòng lặp for in part 2
console.log('// Vòng lặp for in part 2')

var myInfo = {
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi, VN'
};
for (var key in myInfo) {
    console.log(myInfo[key])
}
var language = [
    'js',
    'php',
    'ruby',
    'lavarel',
]
for (var key in language) {
    console.log(language[key])
}
// Vòng lặp for of  parrt 3
console.log(' Vòng lặp for of  parrt 3')

var language = 'Javascript';
for (var value of language) {
    console.log(value)
}
console.log(Object.keys(myInfo))
for (var value of Object.keys(myInfo)) {
    console.log(myInfo[value])
}
// Vòng lặp WHILE PART 4
console.log(' Vòng lặp  WHILE LOOP P4')
var i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
var myArray = [
    'js',
    'php',
    'java',
    'dart']
var m = 0;
while (m < myArray.length) {
    console.log(myArray[m]);
    m++;
}
// Vòng lặp DO  WHILE PART 5
console.log(' Vòng lặp DO WHILE LOOP P5');
var i = 0;
do {
    i++;
    console.log(i);
}
while (i < 9);
// đặc điểm của do while đó là lần thứ nhất sẽ tự động chạy mà k cần kiểm tra điều kiện while ,nghĩa là trong moij trường hợp vẫn in ra khối lệnh trong while.
// break and countinous inloop
console.log(' // break and countinous inloop P6');
// break khi bạn muốn thoát khỏi vòng lặp và continous là khi bạn muốn bỏ qua 1 vài lần lặp của vòng lặp
for (var i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
    // if (i >= 5) {
    //     break;
    // }
}
// Vòng lặp lồng nhau nested loop
console.log('// Vòng lặp lồng nhau nested loop')
var myArray = [
    [1, 2],
    [3, 4],
    [5, 6],
]
for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray[i].length; j++) {
        console.log(myArray[i][j])
    }
}
console.log('Bai toan dua ve tu 100 ve 1');
for (let i = 10; i >= 0; i--) {
    console.log(i)
}