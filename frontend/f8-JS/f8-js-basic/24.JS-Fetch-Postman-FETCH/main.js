// Fetch - lấy dữ liệu từ phía back end trả về
// 1. Front-end : Xây dựng giao diện người dùng
// 2. Back-end : Xây dựng logic xử lý + cơ sở dữ liệu
// Call lên API, front end render ra và hiện thị
// API - Application programing interface
// Được hiểu là cổng giao tiếp giữa các phần mềm
// backend ( ok) --> API (URL) --> Fetch ---> JSON/XML-->
//JSON.parse --> Javascript types -- Render ra giao diện với HTML

var postApis = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApis)
    .then(response => {
        return response.json()
        //JSON.parse JSON--> Javascript r nhé 
    })
    .then(json => console.log(json))
// Json server : fake API server
