//First
console.log('First');
let strFirst = 'aaa@bbb@ccc';
console.log(strFirst.replace(/@/g, '!'));

//Second
console.log('Second');
let dateSecond = '2025-12-31';
console.log(dateSecond.replace(/(2025)-(12)-(31)/g, '$3/$2/$1'));

//Third
console.log('Third');
let strThird = 'Я учу javascript!';
//substring
console.log(strThird.substring(2, 5));
console.log(strThird.substring(6, 16));
//substr
console.log(strThird.substr(2, 3));
console.log(strThird.substr(6, 10));
//slice
console.log(strThird.substring(2, 5));
console.log(strThird.substring(6, 16));