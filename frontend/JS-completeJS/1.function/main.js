// function functionName(param1, param2,..) {
//     // statement 

// }

// Biến cục bộ trong hàm là biến khai báo bên trong hàm , chỉ được sử dụng bên trong thân hàm đó.
// Biến này gọi là biến cục bộ hay biến địa phương .
// Ví dụ biến cục bộ trong JS

function sayHello() {
    const message = 'Hello JS'
    console.log(message);
}
sayHello();
console.log(message)
// biến toàn cục được khai báo ngoài hàm. Có thể được sử dụng và thay đổi giá trị ở mọi nơi trong chương trình. Vì vậy nên hạn chế sử dụng biến toàn cục.
