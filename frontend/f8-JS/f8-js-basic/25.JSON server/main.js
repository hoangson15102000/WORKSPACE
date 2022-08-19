// var courseApi = "http://localhost:3000/courses";
// fetch(courseApi)
//     .then(response => {
//         return response.json();
//     })
//     .then(courses => {
//         console.log(courses);
//     })
// Thư viện json server
// dùng cú pháp npm install -g json-server
//https://github.com/typicode/json-server
//fake api hay là mock api
// Postman giúp gửi đi 4 chức năng này
//CRUD
/**
 - create : tạo mưới -- POST
 - read : Lấy dữ liệu ---GET
 - update : CHỉnh sửa --> PUT/PATCH
 -- Delete : XÓa - delete
 */
// Dùng postman để tạo mới 


// var courseApi = "http://localhost:3000/courses";
// function start() {
//     getCourses(function (courses) {
//         renderCourses(courses);
//     });
//     handleCreateForm();

// }
// start();

// // viết hàm
// function getCourses(callback) {
//     fetch(courseApi)
//         .then(function (response) {
//             return response.json()
//         })
//         .then(callback);
// }


// function renderCourses(courses) {
//     var listCoursesBlock =
//         document.querySelector('#list-courses');
//     var htmls = courses.map(function (course) {
//         return `
//         <li>
//         <h4>${course.name}</h4>
//         <p>${course.description}</p>
//         </li>`
//     })
//     listCoursesBlock.innerHTML = htmls.join('');

// }

// function handleCreateForm() {
//     var createBtn = document.querySelector('#create');
//     createBtn.onclick = function () {
//         var name = document.querySelector('input[name="name"]').value;

//         var description = document.querySelector('input[name="description"]').value;
//         var formData = {
//             name: name,
//             description: description
//         }
//         createCourse(formData);
//     }
// }
// function createCourse(data, callback) {
//     var options = {
//         method: 'POST',
//         body: JSON.stringify(data)
//     }
//     fetch(courseApi, options)
//         .then(function (response) {
//             response.json()
//         })
//         .then(callback)
// }


var courseApi = 'http://localhost:3000/courses';
function start() {
    getCourses(function (courses) {
        console.log(courses);
        renderCourses(courses)

    });// lấy ra các khóa học
    handleCreateForm();
}
start();
/// Logic  là gọi lên API lấy dữ liệu và render ra view




// function
function getCourses(callback) {
    fetch(courseApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}
function createCourse(data, callback) {
    var options = {
        method: 'POST',
        body: JSON.stringify(data)

    }
    fetch(courseApi, options)
        .then(function (response) {
            response.json()
        })
        .then(callback)
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function (course) {
        return `
        <li>
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        </li>`
    })
    listCoursesBlock.innerHTML = htmls.join('');

}
function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value;

        var description = document.querySelector('input[name="description"]').value;
        var formData = {
            name: name,
            description: description

        }
        createCourse(formData)
    }


}