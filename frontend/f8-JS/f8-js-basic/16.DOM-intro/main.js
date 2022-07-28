/// HTML DOM quy chuẩn W3C - ông lớn, đưa ra tiêu chuẩn làm web

//DOCUMENT OBJECT MODEL - Mô hình tài liệu dom
// Có 3 thành phần 
/**
 1. Element
 2. Attribute
 3. Text
 */
// Node - điểm giao nhau // element/attribute/text
// core dom - tất cả các tài liệu. html dom dựa trên core dom
//HTML DOM và DOM API

/**
 1. Element
 2. Attribute
 3. Text
 */
// ----------------------
// Javascript : công cụ để chọc vào html dom, HTML DOM k phải JS
// JS chạy được ở môi trường trình duyệt \ server (NodeJS)
// Application programing interface : 
//Browser : HTML ->  DOM -> DOM API ( thuộc web api)
// DOM k phải của JS, chỉ là web api .
// Document object
// Là đại diện cho cả website của bạn, hover trên console thì hiện tất cả hover

console.log(document);
document.write('Hello guy!');
document.write('Hello guy!');
document.write('Hello guy!');
// Những phương thức để lấy được element trong DOM 
//Get element methods
//ID
console.log('ID')
// 1. Element: ID, class, tag, CSS selector,html collection
var headingNode = document.getElementById('heading-id');
console.log(headingNode);
console.log({
    element: headingNode
});
//CLASS
console.log('CLASS')
var headingNodebyclass = document.getElementsByClassName('heading');
console.log(headingNodebyclass);
console.log({
    element: headingNodebyclass
});
///TAG
console.log('TAG')
var headingNodebyTagName = document.getElementsByTagName('h1');
console.log(headingNodebyTagName);
console.log({
    element: headingNodebyTagName
});
///CSS selector
console.log('CSS selector');
var headingNodebyCSSselector = document.querySelector('.heading')
console.log(headingNodebyCSSselector);
console.log({
    element: headingNodebyCSSselector
});
// Lay the heading dau
var heading_2 = document.querySelector('.box .heading-2:first-child');
console.log(heading_2);
// Lay the heading so 2
var heading_3 = document.querySelector('.box .heading-2:nth-child(2)');
console.log(heading_3);
// nếu .box .heading-2 thì chỉ trỏ đến thằng đầu nên dùng querySelectorAll
var heading_all = document.querySelectorAll('.box .heading-2');
console.log(heading_all); // Nodelist là được coi là 1 mảng
console.log(heading_all[2])

///html colection
console.log(document.forms.testForm);
console.log(document.anchors);

// Get element methods - 2
console.log('Get element methods - 2');
var listItemNodes =
    document.querySelectorAll('.box-1 li');
console.log(listItemNodes);
// c2
var boxNode = document.querySelector('.box-1');
// var boxNode2 = boxNode.querySelectorAll('li');
console.log(boxNode);
console.log(boxNode.getElementsByTagName('li'));
// console.log(boxNode.getElementsByTagName('p'));
console.log('get element method 3');
// get element method 3
//getElementById - số ít , console ra element
//getElementByClassName in ra HTML collection
// Các HTMLcollection, Nodelist tương tự như 1 mảng , muốn in ra thì xuất index

//getElementByTagName in ra HTML collection
//querySelector - số ít , console ra element
//querySelectorAll in console ra Nodelist
//HTML collection img , a,
console.log(document.forms[1])
//document.write
document.write('Hello')