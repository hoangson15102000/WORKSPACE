




/// DOM style CSS
var boxElement = document.querySelector('.box');
console.log(boxElement.style);

boxElement.style.width = '150px';
boxElement.style.height = '200px';
boxElement.style.backgroundColor = 'red';

Object.assign(boxElement.style, {
    width: '200px',
    height: '200px',
    backgroundColor: 'green'
})
// get ra value
console.log(boxElement.style.backgroundColor);
console.log(boxElement.style.width);

// ClasList Property - đây là thuộc tính element node nên chỉ lấy ra khi truy cập element node

console.log(boxElement.classList);
console.log(boxElement.classList.length);
console.log(boxElement.classList.value);
//in ra DOMtokenList quản lý class của element của các bạn
// 5 phương thức dom token 

//add
boxElement.classList.add('red', 'blue'); // cách thêm class

//contains Kiểm tra xem có class hay không
console.log(boxElement.classList.contains('red'));
//remove;
boxElement.classList.remove('red');
setTimeout(() => {
    boxElement.classList.toggle('red');
}, 3000

);
setInterval(() => {
    boxElement.classList.toggle('red');
}, 1000

);
//toggle có thì bỏ k có thì thêm vào , ảo thật đấy :)

