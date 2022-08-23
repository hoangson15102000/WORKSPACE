// // spread 
// function logger({ name, price, ...rest }) {
//     console.log(name);
//     console.log(price)
// }
// logger({
//     name: 'Javascipt',
//     price: 1000,
//     description: 'Đây là mô tả của content'
// })
// // Spread ... toán tử giải
// var array1 = ['javascript', 'ruby', 'php'];
// var array2 = ['reactjs', 'dart'];
// var array3 = [...array1, ...array2];
// console.log(...array3)


// var defaultConfig = {
//     api: 'http.trangkhoahoc',
//     apiVersion: 'v1',
//     other: 'other'
// }
// var excersiseConfig = {
//     ...defaultConfig,
//     api: 'http.trangbaitap'
// }
// console.log(excersiseConfig);
// var Mảng = ['JS', 'PHP', 'Ruby'];
// function logger2(...rest) {
//     for (var i = 0; i < rest.length; i++) {
//         console.log(rest[i])
//     }
// }
// logger2(...Mảng);


// /// tagged template literial
// function highlight([first, ...strings], ...values) {
//     console.log('first :', first);
//     console.log('strings :', strings);
//     console.log('values :', values);
//     return values.reduce(
//         (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()], [first]
//     ).join('')
//     // return values.reduce()
// }
// var brand = 'F8';
// var course = 'Javascript';
// const html = highlight`Học lập trình ${course} tại ${brand} ! `;
// console.log(html)

//Module 
//  thêm cái type vào file src có kiểu là module rồi đó import
import logger, {
    TYPE_LOG, TYPE_WARN, TYPE_ERROR
}
    from './logger.js'

//  import * as constants from 'constant.js'  vì nếu không phải default thì sẽ ko kahi báo như logger đc đâu
logger('Test message...', TYPE_WARN);

