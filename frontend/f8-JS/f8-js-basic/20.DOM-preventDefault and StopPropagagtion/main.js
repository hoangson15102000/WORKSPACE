//DOM events
//1.prevent Default loại bỏ hành vi mặc định của trình duyệt trên thẻ html
//2. stopPropagation loại bỏ sự kiện nổi bọt

var aElements = document.links;
for (var i = 0; i < aElements.length; ++i) {
    aElements[i].onclick = function (e) {
        // console.log(e.target.href);
        if (!e.target.href.startsWith('https://f8.edu.vn')) {
            e.preventDefault();
        }

    }
}
// ví dụ về prevent default nhé
var ulElement = document.querySelector('ul');
//onmousedown để khi click chuột xuống
ulElement.onmousedown = function (e) {
    e.preventDefault();
}
ulElement.onclick = function (e) {
    console.log(e.target)
}

//2. stopPropagation
document.querySelector('div').onclick =
    function () {
        console.log('DIV');
    }

document.querySelector('button').onclick =
    function (e) {
        e.stopPropagation()
        console.log('Click me!');
    }
/// 1. Event listener
