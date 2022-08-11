// alert('Hello JS basic');
// //syntax basic JS
// var fullName = 'Nguyen Hoang Son';
// var age = "26";
// alert(fullName);
// alert(age);
// // SU khac biet var let const

// var name = 'Harry'
// var age = '39'
// if (a > 18) {
//     var name = 'Mr Jone'
// }
// // console.log(age);
// alert('ABS')
// var a = 6;

// var output = ++a;
// console.log('output', output)
// var number = 6;
// var output = number++ + --number
// console.log("output", output)
// var number = 6;
// var output = ++number * 2 - number-- * 2;
// // 7 * 2 - 7 *2
// console.log("output", output)
// // Toán tử chuỗi - String operator
// var firstName = 'Son';
// var lastName = 'Dang';
// var names = 'Son';
// names += ' dang';
// console.log(names)

// console.log(firstName + ' ' + lastName);
// console.log(lastName)
// TOÁN TỬ SO SÁNH
// == bằng
// != không bằng
// > lớn hơn
// < nhỏ hơn
// >= lớn hơn hoặc bằng
// <= nhỏ hơn hoặc bằng
// Ví dụ nhé
// var a = 1;
// var b = 2;
// if (a < b) {
//     console.log('DK dung');

// }
// else {
//     console.log('DK sai');
// }

function createPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject({
                content: "Hello!"
            })
        }, 5000)
    })
}


createPromise().then((res) => {
    console.log("response: ", res)
}).catch((err) => {
    console.log("error: ", err)
})