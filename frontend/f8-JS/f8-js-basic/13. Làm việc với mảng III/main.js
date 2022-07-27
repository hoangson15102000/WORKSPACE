/**
   Array methods:
   forEach() - duyệt qua từng phần tử của mảng

   every() trả về kiểu boolean , kiểm tra tất cả các phần tử phải thỏa mãn điều kiện gì đó 
   đi check lần lượt nếu gặp false là dừng ngay giống như vòng lặp

   some() trả lại từng phần tử để duyệt qua . Chỉ cần 1 ông thỏa mãn thì ngưng lại kiểm tra khi gặp sự kiện đúng
   find() tìm kiếm tuy nhiên chỉ tìm đc 1 đối tượng thôi , tìm thấy đối tượng t1 là bỏ qua luôn.
   filter()
   map()
   reduce()
   tất cả các tham số truyền vào đều là một hàm :)

 */
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 100
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 200
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'Ruby',
        coin: 500
    }
]
// tham số thứ nhất trả về từng phần tử của mảng, tham số thứ 2 là index
courses.forEach(function (course, index) {
    console.log(index, course);

}); // hàm truyền vào dưới dạng tham số được gọi là callback
// every kiểm tra tất cả phần tử thuộc mảng phải thỏa mãn điều kiện gì đó. Chỉ cần có 1 phần tử >0 thì báo false.
console.log('EVERY')
var isFree = courses.every(function (course, index) {
    // console.log(index);
    return course.coin === 0;

});
console.log(isFree);
console.log('SOME- chỉ cần 1 ông điều kiện đúng --- trả về true');
//SOME chỉ cần 1 trong những phần tử bằng điều kiện thì trả về true ngay :)

var isFree = courses.some(function (course, index) {
    console.log(index);
    return course.coin === 0;

});
console.log(isFree);
//FIND nếu không tìm thấy trả về undefined , chỉ trả về phần tử đầu tiên được tìm thấy.
console.log('//FIND nếu không tìm thấy trả về undefined');
var courseRuby = courses.find(function (course, index) {
    return course.name === 'Ruby';

});
console.log(courseRuby);
// FIlter trả về tất cả phần tủ tìm được
var courseRuby = courses.filter(function (course, index) {
    return course.name === 'Ruby';

});
console.log(courseRuby);
//map() sử dụng khi muốn thay đổi các element của 1 array
console.log('//map() sử dụng khi muốn thay đổi các element của 1 array')
// Bài toán đặt ra : thêm Khóa học : vào trong key name: và thêm trường là coinText
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 200
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 200
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'Ruby',
        coin: 500
    }
]

function courseHandler(course) { // ngoài ra trong courseHandler còn tham số nữa là index, index:index; và tham số thứ 3 là originArray 
    // console.log(course)
    return {
        id: course.id,
        name: 'Khoa hoc : ' + course.name,
        coin: course.coin,
        coinText: 'Giá trị bằng : ' + course.coin

    };
}
// tạo ra một biến lưu array thay đổi name và tạo trường mới là coinText
var newCourses = courses.map(courseHandler);
console.log(newCourses)

// trả về mảng mới có số lượng phần tử bằng nhau , cần 1 đối số là function truyền vào map() này, không truyền là lỗi undefined is a not a function
// cơ chế là khi lặp qua mỗi phần tử, nó sẽ call lại một function -> thực thi , tạo ra sự thay đổi của chúng ta
// array reduce method 
console.log('array method reduce')
// reduce nhận về tổng số 1 số
// dễ hiểu 
console.log('Nhận về 1 giá trị duy nhất khi tính toán thì dùng array')
var totalCoin = 0; // Biến lưu trữ totalCoin
// lặp qua các phần tủ
for (var course of courses) {

    // thực hiện lưu trữ
    totalCoin += course.coin;
}

// in ra console 
console.log(totalCoin);
// khó , phải research
console.log('REDUCE');
var k = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    k++;
    // console.log(k, accumulator);
    var total = accumulator + currentValue.coin;
    console.table({
        'Luot chay': k,
        'Bien luu tru ': accumulator,
        'Gia khoa hoc ': currentValue.coin,
        'Tich tru duoc': total
    });
    // console.log(currentValue)
    return accumulator + currentValue.coin;
}
// accumulator: biến lưu trữ gán = giá trị khởi tạo. currentValue : giá trị hiện tại đang ỏ đâu ? 
// currentIndex : chỉ mục của currentValue : vị trí số 2 thì index là 1.
// originArray : array gốc, array gọi đến phương thức reduce;
var totalCoin = courses.reduce(coinHandler, 0);
console.log(totalCoin)
// 2 đối số thứ nhất là 1 hàm, thứ 2 là initial value: giá trị khởi tạo.

// Kết quả cuối cùng khi rút gọn
function coinHandler(accumulator, currentValue) {

    return accumulator + currentValue.coin;
}
var totalCoin = courses.reduce(coinHandler, 0);
console.log(totalCoin)

// ví dụ reduce method
console.log('// ví dụ reduce method');
var totalCoin = courses.reduce(function (total, course) {
    return total + course.coin;
}, 0);
//initial value là giá trị không bắt buộc. K có initial thì lấy phần tử đầu tiên của mảng làm giá trị khởi tạo

console.log(totalCoin);

var numbers = [1, 2, 3, 4, 5, 6];
var totalNumber = numbers.reduce(function (initial, currentValue) {
    return initial + currentValue;
}, 0);
console.log(totalNumber);
// LÀM PHẲNG MẢNG TỬ DEPTH ARRAY - MẢNG SÂU
console.log('LÀM PHẲNG MẢNG TỬ DEPTH ARRAY - MẢNG SÂU');
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
    return flatOutput.concat(depthItem)
}, [])
console.log(flatArray)
// LẤY RA CÁC KHÓA HỌC VÀ ĐƯA VÀO MỘT MẢNG MỚI
var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "Javascipt"
            }
        ]

    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]

    }
]
var newCourses = topics.reduce(function (courses, topic) {
    return courses.concat(topic.courses);

}, [])
console.log(newCourses)
var html = newCourses.map(function (course) {
    return `
    <div>
    <h2>${course.title}</h2>
    <p>ID : ${course.title}</p>
    </div>
    `
});
console.log(html.join('  '))