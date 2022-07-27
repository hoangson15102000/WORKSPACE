// const age = prompt('How old are you!', 18);
// alert('You are ' + age + ' year old!');
// bài toán kiểm tra có phải số nguyên tố hay không
function isPrime(number) {
    if (isNaN(number)) return false;
    if (number < 2) return false;
    if (number === 2) return true;
    for (i = 2; i * i <= number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}
console.log(isPrime(13));

// Câu lệnh rẽ nhánh if else
var date = 20;
if (date == 0) {
    console.log('Hom nay la thu 200')
}

else if (date === 2) {
    console.log('Hom nay la thu 2')
}
else if (date === 4) {
    console.log('Hom nay la thu 4')
}
else {
    console.log('Hong bit nua')
}

// switch case
console.log('switch case part - 2 ');
var year = 206;
switch (year) {
    case 2022:
        console.log('Nam nay la 2022');
        break;
    case 2023:
        console.log('Nam nay la 2023');
        break;
    case 2024:
        console.log('Nam nay la 2024');
        break;
    case 2025:
        console.log('Nam nay la 2025');
        break;
    case 2026:
        console.log('Nam nay la 2026');
        break;
    case 2027:
        console.log('Nam nay la 2027');
        break;
    default:
        console.log('Khong biet ')
}
// biết trước giá trị rồi thì dùng , nhỏ quá dùng if else
// toán tử 3 ngôi
console.log('// toán tử 3 ngôi parrt 3')
var course = {
    name: 'Javascript',
    coin: 22
}
// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`);

// }
// else {
//     console.log('Free')
// }
var result22 = course.coin > 0 ? `${course.coin} Coins` : 'Free';
console.log(result22);
var a = 3;
var b = 4;
var c = a > 0 ? a : b;

var day = 3;
if (day === 2) {
    console.log('Hom nay la thu 2')
}
else if (day === 3) {
    console.log('Hom nay la thu 3')
}
else if (day === 4) {
    console.log('Hom nay la thu 4')
}

var day = 6;
switch (day) {
    case 5:
        console.log('Hom nay T5');
        break;
    case 6:
        console.log('Hom nay t6');
        break;
}
// toán tử 3 ngôi
var resullt = course.coin > 0 ? course.coin + 'coin' : 'free';
console.log(resullt);