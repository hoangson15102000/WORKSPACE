// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((total, number/** ,index,array*/) => {
//     return total + number;
// })
// console.log(result);



Array.prototype.reduce2 = function (callback, result) {
    for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce2((total, number) => {
    return total + number;
}, 10)
console.log(result);


// include mehtod Array and String
console.log(Array.prototype.includes);

var title = 'Responsive web design';
console.log(title.includes('web design', 10));
var arr = ['js',
    'php',
    'dart',
]
console.log(arr.includes('js', 0))
