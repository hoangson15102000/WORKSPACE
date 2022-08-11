/* Bài 1: cho array = [1,5,7,8,9,15,8]

1.1 in ra các số chẵn của mảng
1.2 in ra các số lẻ của mảng
1.3 in ra các số lớn hơn hoặc bằng 5 của mảng
1.4 Cộng tổng các số chia hết cho 5 của mảng
1.5 Tìm ra tích 3 số đầu của mảng array
1.6 Tính tổng 3 phần tử cuối của mảng
1.7 Tìm xem trong array có phần tử nào là số 5 không?
1.8 Đếm số phần tử = 8 trong mảng;
**/
// var arr = [1, 5, 7, 8, 9, 15, 8];
// var sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {

//         console.log('Cac so chan', arr[i]);
//     }
//     else if (arr[i] % 2 != 0) {
//         console.log('cac so le', arr[i])
//     }
//     else if (arr[i] % 5 == 0) {
//         sum += arr[i];

//     }
//     console.log(sum)
// }

var arr = [1, 5, 7, 8, 9, 15];
// Su dung map hoac filter
var newArr = arr.filter(function (item) {
    return item % 2 == 0;

})
console.log(newArr)