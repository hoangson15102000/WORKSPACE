//2. JSON
/**
2.JSON
3.Fetch
4.DOM location
5. Local storage
6. Session storage
7. Coding convention
8. Best Practices
9.Mistakes
10. performance
 */
// Json là một định dạng dữ liệu ( chuỗi) // như bộ quy tắc với nhau thôi :)
// 2. Javascript object notation
//3. JSON : number, boolean, null, array,object

// Mã hóa // Giải mã
// ENcode / decode
// Stringify / convert sang kiểu dũ liệu khác parse .. Từ JS sang Json
// Parse : từ JSON sang JS

var json = '1';
var json = 'null';
var json = '["JS","PHP"]';// chuoi JSon the hien array, dung " ko dc dung ''"
var json = '{"name":"Son Dang","age":18}';
var a = '1';
console.log(JSON.parse(a))
console.log(JSON.parse(json))
// chuyen sang json
console.log(JSON.stringify(null));
//3. promise
console.log('Promise P3')
// 3. Promise
// - Sync đồng bộ
// - Async - bất đồng bộ
// - Nỗi đau : 
// - Lý thuyết Promise , cách hoạt động
// - Thực hành , ví dụ
// Đồng bộ sync / bất đồng bộ async
// Đồng bộ : code nào viết trước chạy trước code nào viết sau chạy sau
// ví dụ
console.log(1);
console.log(2);
// Khó hơn nhé
// setTimeout(function () {
//     console.log(1)
// }, 1000
// )

console.log(2);
// Tư duy đồng bộ là hàm setTimeout sẽ như sleep , rồi sau đó console log ra 1
// Rồi mới console log ra 2
// Async : setTimeout, setInterval, fecth,XMLHttpRequest
// đọc file reading 
// request animation frame
// Callback 

console.log('PROMISE _ PAIN')
// Callback Hell callback lồng callback
// setTimeout(function () {
//     console.log(1); // viec 1
//     setTimeout(function () {
//         console.log(2); // viec 1
//         setTimeout(function () {
//             console.log(3); // viec 1
//             setTimeout(function () {
//                 console.log(4); // viec 1
//                 setTimeout(function () {
//                     console.log(5); // viec 1
//                     setTimeout(function () {
//                         console.log(6); // viec 1

//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
// pyramid of doom : kim tự tháp
// Lý thuyết , cách hoạt động

// 1. new Promise khởi tạo
// 2. Executor : thực thi
// Memory leak ,
// Promise là một Object constructor 
var promise = new Promise(
    function (resolve, reject) {
        //logic
        // thành công: resolve()
        // thất bại: reject()
        // hàm function này truyền vào 2 tham số là 2 hàm resolve và reject
        // reject('Co loi')
        // resolve([{
        //     id: 1,
        //     name: 'SOn hoang'
        // }])
        resolve();
    }

)
// Nếu thành công giải quyết, resolve thì nó sẽ chui vào .then và thực thi hàm trong đó
// nếu thất bại giải quyết , reject nó sẽ chui vào .catch và thực thi giải quyết vấn đề
// nếu 1 trong 2 TH thì đều chui vào finnally
//  3 trạng thái của Promise
// 1. Pending : chờ, 2. Fulfilled : thành công  3. Rejected thất bại
// promise
//     .then(
//         function (courses) {
//             console.log(courses)
//         }
//     )
//     .catch(
//         function (error) {
//             console.log(error)
//         }
//     )
//     .finally(
//         function () {
//             console.log('Done')
//         }
//     )
// promise là khái niệm sinh ra giúp xử lý thao tác bất đồng bộ , trước khi có promise ta dùng callback tuy nhiên sẽ bị
// callback hell, code rất là khó nhìn , rối, khó hiểu . khắc phục callback hell
// ĐỂ Tạo ra Promise ta khởi tạo với từ khóa new Promise và truyền vào một 
// excute function , trong function có 2 tham số
// 2 tham số là hàm resolve và reject 
// sử dụng trong những thao tác bất đồng bộ
// Sử dụng qua phương thức .then( promise đc resolve) và .catch (promise bị reject)



// PROMISE CHAIN - chuỗi
//
console.log('Promise chain')
promise
    .then(
        function () {
            return new Promise(function (resolver) {
                setTimeout(function () {
                    resolve([1, 2, 3])
                }, 3000)
            }
            )

        }
    )
    // return ra 1 thì lọt vào function dưới 
    // nếu return ra 1 promise thì nó sẽ chờ khi hàm trong promise chạy xong mới chaỵ hàm dưới

    .then(
        function (data) {
            console.log(data);
            return 2;
        }
    )
    .then(
        function (data) {
            console.log(data);
            return 3;
        }
    )
    .then(
        function (data) {
            console.log(data);
            return 4;
        }
    )
    .catch(
        function (error) {
            console.log(error)
        }
    )
    .finally(
        function () {
            console.log('Done')
        }
    )

function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms)
    });
}
sleep(1000)
    .then(() => {
        console.log(1);
        return sleep(1000);
    })
    .then(() => {
        console.log(2);
        return sleep(1000);
    })