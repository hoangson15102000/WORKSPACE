// map biến đổi các phần tử mảng đấy thành phần tử mới
/*
arr.mao(function(item){
    // transform
    return newValue;
})
*/
var numbers = [1, 2, 3, 4];
var squareNumbers = numbers.map(function (item) {
    return item * item;

})
console.log(squareNumbers);
// bài tập cho 1 array gồm các 
var newArr = [{ width: 10, height: 5 },
{ width: 15, height: 25 },
{ width: 12, height: 5 }];
// biến đổi mảng thành 1 mảng mới thành diện tích các hình trên
var Dientich = newArr.map(function (x) {
    return x.width * x.height;
})
console.log(Dientich)

// arrray filter - lọc

