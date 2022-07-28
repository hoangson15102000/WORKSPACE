// 1. Element
// 2. Attribute
// 3. Text

//DOM attributes Cách thêm attributes vào 1 elements
//seter
var headingElement = document.querySelector('h1');
console.log(headingElement)
headingElement.id = 'heading';
headingElement.className = 'Heading';
headingElement.style = 'color:red;';
var anchorElement = document.querySelector('a');
anchorElement.href = 'google.com';
console.log(anchorElement);
// cach2 - vẫn đặt được khi attribute không có sẵn
// headingElement.setAttribute('name attribute', 'value attribute');
headingElement.setAttribute('href', 'heading');
// cách get ra value của attributel;

console.log(headingElement.getAttribute('class'))

//InnerText vs textContent Property
//innerText chỉ hiện những gì bạn thấy trên web còn textContent in ra tất
// textContent sẽ trả về cả các khoảng trắng, sắp xếp các thẻ còn innerText thì in ra thui
console.log('//InnerText vs textContent Property');
// get element 
var headingElement = document.querySelector('h1');
console.log(headingElement)
console.log(headingElement.textContent);
console.log(headingElement.innerText);
//seter
headingElement.innerText = 'New heading';
headingElement.textContent = 'New headings';
/// Thêm element vào element
// InnerHTML Propertype
console.log('/// Thêm element vào element // InnerHTML Propertype')
var boxElement = document.querySelector('.box');
console.log(boxElement)
boxElement.innerHTML = '<h2 title="hissii">HALO</h2>';
console.log(document.querySelector('h2').innerText);
//outerHTML - ben ngoai thằng này khi get ra thì nó lấy cả ở ngoài, ví dụ
console.log(boxElement.outerHTML);
// Còn innerHTML thì lấy trong thôi
console.log(boxElement.innerHTML);
// Khi set thì sao  ? outerHTML nó sẽ in thay thế luôn thằng cũ ấy, ví dụ
// boxElement.outerHTML = '<span>ABCD</span>';
boxElement.innerHTML = '<span>ABCD</span>';
console.log(boxElement)