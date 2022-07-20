/**
 * 1. Tạo chuỗi
Các cách tạo chuỗi 
nên dùng khi nào vì sao
kiểm tra data type
2. một số case sử dụng blackslash \
3. xem độ dài chuỗi
4. chú ý độ dài khi viết code
5. template string es6
 */
var fullName = 'Hoang Son la   \'sieu nhan\'';
// cach 2
var fullName2 = new String('Hoang Son Nguyen '); //  dài dòng :) lâu chạy
// nên chỉ có tầm 80 ký tự một dòng , dài quá thì sử dụng nối chuỗi nhé ""+""
console.log(fullName)
console.log(fullName.length)
console.log(fullName2);
// Template string
var firstName = 'Son';
var lastName = 'Hoang';
console.log('Toi la : ' + firstName + ' ' + lastName);
console.log(`Toi la :        ${firstName} ${lastName}`);
// làm việc với chuỗi 
/**
 * 1. length
 * kiểm tra độ dài chuỗi //console.log(myString.length)
 * 2. find index
 *  tìm ký tự trong một chuỗi //console.log(myString.indexOf('F8'));
 * console.log(myString.indexOf('F8'));
console.log(myString.indexOf('HE'));
console.log(myString.indexOf('F8', 5));//  được hiểu là tìm F8 nhưng sau index 5
console.log(myString.lastIndexOf('F8')); // được hiểu là tìm F8 cuối cùng
console.log(myString.search('F8', 8)); // search không hỗ trợ vị trí tìm kiếm

 * 3. cut string
cắt chuỗi
syntax :
console.log(myString.slice(4)) // cắt từ vị trí số 4 đến 6
// nếu bỏ số 6 thì cắt từ 4 cho đến hết nhé

 * 4. replace
// thay đổi chuỗi 
console.log(myString.replace('F8', 'laptrinh full snack'));
// sử dụng biểu thức chính quy /F8/g
console.log(myString.replace(/F8/g, 'laptrinh full snack'));

 * 5. convert to upper case ( chữ hoa)
 * 6. convert to lower case ( chữ thường )
 * 7. trim
 *  nhiệm vụ loại bỏ khoảng trắng thừa ở 2 đầu đi nhé
 * console.log(myString.trim());
 * 8. split
 * nhiệm vụ là cắt 1 cái chuỗi thành array nhé  
 * 9. get a character by index 
 */
//length
var myString = '     Hoc JS tai F8 F8!    ';
// console.log(myString.length);
// console.log(myString.indexOf('F8'));
// console.log(myString.indexOf('HE'));
// console.log(myString.indexOf('F8', 5));//  được hiểu là tìm F8 nhưng sau index 5
// console.log(myString.lastIndexOf('F8')); // được hiểu là tìm F8 cuối cùng
// console.log(myString.search('F8', 8)); // search không hỗ trợ vị trí tìm kiếm
console.log(myString.slice(4)) // cắt từ vị trí số 4 đến 6
// nếu bỏ số 6 thì cắt từ 4 cho đến hết nhé;
console.log(myString.slice(-3, -1)); // nguộc lại
// thay đổi chuỗi 
console.log(myString.replace('F8', 'laptrinh full snack'));
// sử dụng biểu thức chính quy /F8/g
console.log(myString.replace(/F8/g, 'laptrinh full snack'));
// chuyển đổi thành chữ hoa 
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.trim().length);
var languages = 'Javascript, PHP, Ruby';
var languages1 = 'Javascript';
// syntax split
console.log(languages.split(','));
console.log(languages1.split(''));
// get a character by index syntax
var myString3 = 'Hoang Son Nguyen'
console.log(myString3.charAt(6));
console.log(typeof myString3[3]); // lấy ra ký tự trong chuỗi




