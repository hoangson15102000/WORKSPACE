
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms)
    });
}
sleep(1000)
    .then(() => {
        console.log(1);
        return sleep(1000);
    })
    .then(() => {
        console.log(2);
        return new Promise(function (resolve, reject) {
            reject('Co loi');
        })
    }
    )
    .catch((err) => {
        console.log(err)
    })
// Khởi tạo new Promise
//2. Excutor

var promise = new Promise(function (resolve, reject) {
    // quy uớc resolve thành công, reject thất bại
    // Khi thành công thì gọi đến thằng resolve , thất bại thì gọi tới reject()

})
promise
    .then(function () {
        // khi gọi resolve
    })
    .catch(function () {
        // khi gọi reject
    })
    .finally(function () {
        // khi gọi 1 trong 2 cái 
    })
// cách gọi promise nhanh
//1/ Promise.resolve
//2. Promise.reject
//3. Promise.all chạy song song promise
// var promise = Promise.resolve('Success!');
var promise = Promise.reject('Error 123');

promise
    .then((result) => {
        console.log('result:', result)
    })
    .catch((err) => {
        console.log('error', err)
    })
var promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve([1]);
    }, 5000)
})
var promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve([2, 3]);
    }, 5000)
})
// dùng promise all để cho 2 cái promise chạy đồng thời
Promise.all([promise1, promise2])
    .then((result) => {
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2))
    })


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
    }
]


// bước 1 : Gọi API để lấy comments
// bước 2 : từ comments lấy ra user_id,
// từ user_id lấy ra user tương ứng

function getComments() {
    return new Promise(function (resolve) {
        // Mô phỏng internet bị chậm mình settimeout trong khoảng 1s
        setTimeout(function () {
            resolve(comments)
        }, 1000)
    })
}



/// viết ra một hàm để chọc vào những ông User lấy đúng những ô user có id = 1 và id = 2
function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        var result = users.filter((user) => userIds.includes(user.id));
        setTimeout(function () {
            resolve(result)
        }, 1000)
    })
}

function then(func) {
    func("res")
}

// x("C")


getComments()
    .then((comments) => {
        var userIds = comments.map(function (comment) {
            return comment.user_id;
        })
        console.log(comments)

        return getUsersByIds(userIds)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments
                };
            })
    })
    .then(function (data) {
        console.log(data);
        var commentBlock = document.getElementById('comment-block');
        var html = ''
        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user) {
                return user.id === comment.id
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        })
        commentBlock.innerHTML = html;
    })