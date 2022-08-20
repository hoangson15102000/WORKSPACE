// Fetch - lấy dữ liệu từ phía back end trả về
// 1. Front-end : Xây dựng giao diện người dùng
// 2. Back-end : Xây dựng logic xử lý + cơ sở dữ liệu
// Call lên API, front end render ra và hiện thị
// API(url) - Application programing interface giao diện lập trình ứng dụng
// Giao tiếp với phần mềm - cổng giao tiếp
// Được hiểu là cổng giao tiếp giữa các phần mềm
// backend ( ok) trả cho API --> API (URL) dùng fetch để gọi lên API lấy dữ liệu --> Fetch xong nhận đc dữ liệu JSON ---> JSON/XML-->
//JSON.parse để pạt ra javascript types --> Javascript types -- Render ra giao diện với HTML

var postApis = 'https://jsonplaceholder.typicode.com/posts';

// fetch(postApis)
//     .then(response => {
//         return response.json()
//         //JSON.parse JSON--> Javascript r nhé 
//     })
//     .then(json => console.log(json))
// // Json server : fake API server 

// fetch(postApis)
//     .then(function (response) {
//         return response.json(); /// json nay la 1 promise
//     })
//     .then(function (posts) {
//         var htmls = posts.map(function (post) {
//             return `<li>
// <h2>${post.title}</h2>
// <p>${post.body}</p>
// </li>`
//         })

//         var html = htmls.join('');
//         document.getElementById('post-block').innerHTML = html;

//     })

fetch(postApis)
    .then(function (response) {
        return response.json(); /// nhiệm vụ parse chuỗi json này thành kiểu Javascipt
    })
    .then(function (abc) {
        var htmls = abc.map(function (post) {
            return `<li><h2>${post.body}</h2>
            <p>${post.userId}</p></li>`
        })
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })