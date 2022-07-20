// Khái niệm hàm function
/**
 * Hàm là 1 khối mã, làm 1 việc cụ thể
 * hàm built in
 * và hàm tự định nghĩa
 * hàm không thực thi khi được định nghĩa
 * sẽ được thực thi code khi gọi
 * hàm có thể nhận tham số
 * có thể trả về 1 giá trị
 * TẠO HÀM
 * tên hàm a - z A -Z 0-9 _ , không được đặt số lên đầu
 * 
 */
function showDialog() {
    //  code in block
    alert('Hi xin chào các bạn')
}
// showDialog()
// đối số arguments trong hàm 
// tính private
function writeLog(message) {
    console.log(message)
}
writeLog('Dcm');// 'Dcm' là đối số 
function writeLog1() {
    var myString = ''
    for (var param of arguments) {
        myString += `${param} - `

    }
    console.log(myString)
}
// định nghĩa param  của array arguments
writeLog1('log1', 'log2', 'log3')


function ABC() {
    var myStr = ''
    for (var xyz of arguments) {
        myStr += `${xyz} * `
    }
    console.log(myStr)
}

ABC(1, 2, 3, 4, 5, 6, 7)
//  từ khóa return trong hàm ! tra ve
// var isConfirm = confirm('run');
// console.log(isConfirm)
function cong(a, b) {
    return a + b;
}
var result = cong(2, 8)
console.log(result)

//  mỘt số điều cần biết vê function các hàm sau sẽ ghi đè lên 
// một biến được xác định tròn hàm thì chỉ trong hàm mà thôi nhé các bạn
// Các loại function
// 1. Declaration function phai dat ten
// 2. Expression function k can dat ten không thể gọi trước khi được định nghía
// 3. Arrow function

function showMessage() {
    // declaration function
    console.log(" declaration function")
}
var showMessage2 = function () {
    // expression function
    console.log(' // expression function')
}
showMessage(

)
showMessage2()