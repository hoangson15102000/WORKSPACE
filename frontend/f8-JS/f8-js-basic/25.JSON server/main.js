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
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
        .then(function (response) {
            response.json()
        })
        .then(callback)
}
function deleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(courseApi + '/' + id, options)
        .then(function (response) {
            response.json()
        })
        .then(function () {
            // getCourses(renderCourses)
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove()
            }
        })
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function (course) {
        return `
        <li class='course-item-${course.id}'>
        <h4 class = 'h4-${course.id}'>${course.name}</h4>
        <p class ='p-${course.id}'>${course.description}</p>
        <button onclick="deleteCourse(${course.id})">Xóa</button>
        <button onclick="handleUpdate(${course.id})">Sua</button>
        </li>
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
function handleUpdate(id) {
    var nameUpdate = document.querySelector('.h4-' + id).textContent;
    var desUpdate = document.querySelector('.p-' + id).textContent;
    document.querySelector('input[name="name"]').value = `${nameUpdate}`
    document.querySelector('input[name="description"]').value = `${desUpdate}`
    var saveBtn = document.querySelector('#save');
    saveBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value
        var description = document.querySelector('input[name="description"]').value
        var dataForm = {
            name: name,
            description: description
        }
    }
    fetch(courseApi + '/' + id, dataForm)
        .then(function (response) {
            response.json()
        })
        .then(function () {
            getCourses(renderCourses)
        })
}