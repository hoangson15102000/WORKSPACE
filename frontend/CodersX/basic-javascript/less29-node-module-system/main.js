// var numbers = [2, 9, 3, 4, 4, 1];

// const result = numbers.sort(function (a, b) {
//     return b - a;
// })
// console.log(result);
// var employees = [
//     { name: 'Ty', age: 18 },
//     { name: 'John', age: 20 },

//     { name: 'Maria', age: 28 },

// ]
// var ketqua = employees.sort((a, b) => a.age - b.age)
// // gia su a =employees[1],b=employees[2]
// // return lon hon khong
// console.log(Math.min(1, 2, 2, 3, 5, 3, 2, 4));
// console.log('random', Math.floor((Math.random() - 0.4) * 10));


// var today = new Date();
// console.log(today)
var Mouse = require('./Mouse');
var Cat = require('./Cat');


var mickey = new Mouse('black');
var jerry = new Mouse('orange');
console.log(mickey, jerry);
var tom = new Cat();
tom.eat(mickey);
console.log(tom)



