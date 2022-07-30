
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

// cách gọi promise nhanh
//1/ Promise.resolve
//2. Promise.reject
//3. Promise.all chạy song song promise
// var promise = Promise.resolve('Success!');
var promise = Promise.reject('Error');

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
    }
]


// bước 1 : Gọi API để lấy comments
// bước 2 : từ comments lấy ra user_id,
// từ user_id lấy ra user tương ứng

getComments()
    .then(function (comments) {
        var userIds = comments.map(function (course) {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve(comments);
                }, 1000)
            })
        })
    })
/// viết ra một hàm để chọc vào những ông User lấy đúng những ô user có id = 1 và id = 2
function getUsersByIds(userIds) {
    return user
}