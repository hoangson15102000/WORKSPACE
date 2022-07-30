//DOM events
// Là sự kiện diễn ra trong dom, cả người dùng và trình duyệt
// Khi click bôi đen, kéo chuột ,vvv tương tác lên website là những sự kineej diễn rae trong quá trình tương tác website
// 1. attribute events
//2.  assign event using the element node
var h1Element = document.querySelectorAll('h1');

// h1Element.onclick = function () {
//     //code here!!

//     console.log('Hello detective')
// }

for (var i = 0; i < h1Element.length; i++) {
    h1Element[i].onclick = function (e) {
        console.log(e.target);
    }
}

// DOM events
//1. Input / select
//2. Key up / down
var inputValue;
var inputElement = document.querySelector('input[type="text"]');
inputElement.onchange = function (e) {
    console.log(e.target.value);
    inputValue = e.target.value;

}
//oninput go den dau console.log den do
var inputElement2 = document.querySelector('input[type="checkbox"]');
inputElement2.onchange = function (e) {
    console.log(e.target.checked);
    // inputValue = e.target.value;

}
var inputElement3 = document.querySelector('select');
inputElement3.onchange = function (e) {
    console.log(e.target);
    // inputValue = e.target.value;

}
///Key up key down 
var inputElement = document.querySelector('input[type="text"]');
inputElement.onkeyup = function (e) {
    console.log(e.target.value);
    inputValue = e.target.value;
    console.log(e.which);
    switch (e.which) {
        case 27:
            console.log('exit');
            break;
    }

}
