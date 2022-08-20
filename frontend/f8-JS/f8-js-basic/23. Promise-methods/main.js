
// function sleep(ms) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, ms)
//     });
// }
// sleep(1000)
//     .then(() => {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log(2);
//         return new Promise(function (resolve, reject) {
//             reject('Co loi');
//         })
//     }
//     )
//     .catch((err) => {
//         console.log(err)
//     })
// // Khởi tạo new Promise
// //2. Excutor

// var promise = new Promise(function (resolve, reject) {
//     // quy uớc resolve thành công, reject thất bại
//     // Khi thành công thì gọi đến thằng resolve , thất bại thì gọi tới reject()

// })
// promise
//     .then(function () {
//         // khi gọi resolve
//     })
//     .catch(function () {
//         // khi gọi reject
//     })
//     .finally(function () {
//         // khi gọi 1 trong 2 cái 
//     })
// // cách gọi promise nhanh
// //1/ Promise.resolve
// //2. Promise.reject
// //3. Promise.all chạy song song promise
// // var promise = Promise.resolve('Success!');
// var promise = Promise.reject('Error 123');

// promise
//     .then((result) => {
//         console.log('result:', result)
//     })
//     .catch((err) => {
//         console.log('error', err)
//     })
// var promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve([1]);
//     }, 5000)
// })
// var promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve([2, 3]);
//     }, 5000)
// })
// // dùng promise all để cho 2 cái promise chạy đồng thời
// Promise.all([promise1, promise2])
//     .then((result) => {
//         var result1 = result[0];
//         var result2 = result[1];
//         console.log(result1.concat(result2))
//     })


// Promise EXAMPlE
// Thành phần bao gồm tên và ảnh / comment được lưu trữ dưới dạng Array và Object

var users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Hung Dam'
    }
]
var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video :('
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra roi em oi'
    },
    {
        id: 2,
        user_id: 2,
        content: 'em check di'
    },
    {
        id: 2,
        user_id: 2,
        content: 'em check lai xem sao '
    }
]


// bước 1 : Gọi API để lấy comments
// bước 2 : từ comments lấy ra user_id,
// từ user_id lấy ra user tương ứng
// fake api , hành động lấy được API qua uRL là một hành động bất đồng bộ trong JS

function layComments() {
    return new Promise(function (resolve, reject) {
        // mô phỏng internet bị chậm 1s
        setTimeout(() => {
            resolve(comments)

        }, 1000);
    })
}
function layratenUsertuID(userID) {
    return new Promise(function (resolve) {
        var ketqua = users.filter(function (getName) {
            return userID.includes(getName.id)
        })
        setTimeout(function () {
            resolve(ketqua)
        })


    })
}
layComments()
    .then(function () {
        var userID = comments.map(function (getID) {
            return getID.user_id;


        })
        console.log(userID)
        return layratenUsertuID(userID)
            .then(function (users) {
                return {
                    users: users, // bên trái là thuộc tính , bên phải là giá trị thuộc tính
                    comments: comments
                }

            })

    })
    .then(function (data) {
        console.log(data);
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user) {
                return user.id === comment.id;
            })
            console.log(user);
            html += `<li>${user.name}:${comment.content}</li>`
        })
        commentBlock.innerHTML = html

    })

