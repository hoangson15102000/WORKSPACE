//  Callback
// Là hàm truyền qua đối số 
// Khi gọi hàm khác
//1. là hàm 2. được truyền qua đối số
// 3. được gọi lại trong hàm nhận đối số.

function myFunction(param) {
    if (typeof param === 'function') {
        param('Hoc lap trinh')
    }
}

myFunction(myCallback);
function myCallback(value) {
    console.log('Value: ', value)

}
function sumab(a, b) {
    return a + b;
}
function divab(a, b) {
    return a / b;
}
function callbackab(a, b, cb) {
    return cb(a, b);
}
console.log(callbackab(1, 2, divab))
// callback phần 2 

var courses = [
    'JS',
    'PHP',
    'Ruby'
];

// var htmls = courses.map(function (course) {
//     return `<h2>${course}</h2>`
// })
// console.log(htmls.join(' '))
// Tạo thêm thuộc tính thông qua object prototype như sau
// Hàm constructor là Array(), thuộc tinh tạo thêm là map2 là 1 hàm
// Hàm khởi tạo constructor sẽ chứa từ khóa this để biểu thị object được tạo ra từ nó
Array.prototype.map2 = function (callback) {
    var output = []
    //this chinh casi thang goi toi phương thức map2() này courses
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; ++i) {
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}
var htmls = courses.map2(function (course) {
    return `<h2>${course}</h2>`;
})
console.log(htmls.join(' '));
// courses.map2()

//forEach , find,filter,some,every,reduce

var courses = [
    'JS',
    'PHP',
    'Ruby'
];
console.log(courses)
/// My forEach method -  2
console.log('/// My forEach method -  2')
var arr1 = [
    'JS',
    'PHP',
    'Ruby'
]
Array.prototype.forEach2 = function (callback) {
    for (var index in this) {
        // console.log(index, this.hasOwnProperty(index)) // kiểm tra index có phải nằm trong thằng thuộc tính gần nhất của object hay không
        if (this.hasOwnProperty(index)) {
            console.log('index:', index)
            callback(this[index], index, this);
        }
    }
} /// Sẽ lặp qua cả forEach2 vì nó được thêm vào trong prototype rồi 
arr1.length = 100;
var output = arr1.forEach2(function (course, index, array) {
    console.log(course, index, array)
})
console.log(output);// forEach kh trả về gì cả
/// Filter  
console.log('Filter - 3')

var arr2 = [
    {
        name: ' Js',
        coin: 500

    }, {
        name: 'PHP',
        coin: 860
    }, {
        name: 'Ruby',
        coin: 980
    }
]
// var filerArr2 = arr2.filter(function (course, index, array) {
//     return course.coin > 700;
// })
Array.prototype.filter2 = function (callback) {
    var output1 = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                output1.push(this[index]);
            }
        }
    }
    return output1;
}
var filerArr2 = arr2.filter2(function (course, index, array) {
    return course.coin > 700;
})
console.log(filerArr2);
// some method 
console.log('some method - p4');
Array.prototype.some2 = function (cb) {
    for (let i = 0; i < this.length; ++i) {
        if (this.hasOwnProperty(i)) {
            var ketquasome = cb(this[i], i, this);
            if (ketquasome) {
                return true;
            }
        }
    }
    return false;
}




var ketqua = arr2.some2(function (course, index, array) {
    return course.coin < 500;
})
console.log(ketqua)
/// Every 
console.log('every methods p5 ');
Array.prototype.every2 = function (cb) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result3 = cb(this[index], index, this);
            if (!result3) {
                return false;
                break;
            }
        }
    }
    return true;
}
var result3 = arr2.every2(function (course, index, array) {
    return course.coin > 499;
})
console.log(result3)