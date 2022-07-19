// Hiểu hơn vê câu lệnh điều kiện
// và phép so sánh
var a = 1;
var b = 2;
/**
 * 0 
 * ''
 * null
 * undefined
 * NaN
 * false
 * nếu không trong 6 cái này thì sẽ đọc sang phải và lấy giá trị sau
 * nếu phải lấy đúng giá trị đó
 * 
 */
var result = a < b && a < 0;
var result1 = 'A' && 'B' && 'C' && 'D';
if (result1) {
    console.log('DK dung');
}
else {
    console.log('DK sai')
}
var result2 = 'A' || 'B' || 'C' || 'D';
console.log('result', result2)
// toán tử or ngược với and là thấy toán tử nào true cái là lấy luôn
