//  kiểu dữ liệu boolean chỉ trả về giá trị true hoặc false.
var isSuccess = true;
console.log(isSuccess);
var a = 1;
var b = 0;
var c = -1;
var d = null;
typeof (d);
let foo;
console.log(typeof foo);
console.log('is undefined?', foo === undefined);
// is undefined? true
function foo1() { return 'hello'; }
console.log('is undefined?', foo1() === undefined);
// is undefined? true
var isSuccess = a > b;
console.log(isSuccess);
// câu lệnh điều kiện if và else
if (null) {
    console.log("Đẹp trai thì mới có nhiều đứa yêu")

}
else {
    console.log("xấu trai nhưng nhiều văn thơ , đang học cơ hí bách khoa bó tay ngang sang làm coder vậy là ")
}
// trong js có 6 giá trị sau 0 , false, chuỗi rỗng, undefined, NaN,null.
/** 
 * toán tử logic
 * 1.&& - And
 * 2. || or
 * ! not
 */
if (a > 0 && b > 0 && c > 0) {
    console.log("DK dung")
}
else {
    console.log('dk sai')
}
// toán tử or || 1 trong những điều kiện đúng là trả về true
if (a > 0 || b > 0 && c > 0) {
    console.log("DK dung")
}
else {
    console.log('dk sai')
}
// ToÁN TỬ not phủ ddinhj lại giá trị của bạn
if (!(a > 0 || b > 0 && c > 0)) {
    console.log("DK dung");
}
else {
    console.log('dk sai');
}
