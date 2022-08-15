// ĐỆ QUY 
var array = ['a', 'b', 'c', 'a', 'b', 'c',]
console.log(new Set(array))
// Hàm Set ở đây là hàm chỉ cho chúng được xuất hiện 1 lần thôi nhé.
console.log([...(new Set(array))]) // hoc sau o es6 nhe
// ĐỊNH NGHĨA DỆ QUY hàm gọi lại chính nó

function countDown(num) {
    if (num > 0) {
        console.log(num)
        return countDown(num - 1);
    }
    return num;
}
countDown(5);

// functional programing - lập trình hướng hàm !!
// 1. Xác định được điểm dừng
// 2. logic handle => tạo ra điểm dừng
function loop(sobatdau, end, cb) {
    if (sobatdau <= end) {
        cb(sobatdau)
        return loop(sobatdau + 1, end, cb);
    }

}
var array = ['js', 'php', 'ruby'];
loop(0, array.length - 1, function (i) {
    console.log('index  :', i);
    console.log(array[i]);
});
// Vi du tinh giai thua
function giaithua(nums) {
    var output = 1;
    for (let i = nums; i > 0; i--) {
        output *= i;
    }
    return output;
}
console.log(giaithua(5))
// cách giải bằng đệ quy
function giaiThua(nums) {
    if (nums > 0) {
        return giaiThua(nums - 1) * nums;

    }
    return 1;
}
console.log(giaiThua(4))