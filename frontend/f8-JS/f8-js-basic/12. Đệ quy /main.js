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
}
countDown(5);

// functional programing - lập trình hướng hàm !!
// 1. Xác định được điểm dừng
// 2. logic handle => tạo ra điểm dừng
function loop(start, end, cb) {
    if (start <= end) {
        cb(start)
        return loop(start + 1, end, cb);
    }

}
var array = ['js', 'php', 'ruby'];
loop(0, array.length - 1, function (index) {
    console.log('index :', index);
    console.log(array[index]);
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