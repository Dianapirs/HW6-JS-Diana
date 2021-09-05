//First
console.log('First');
let strFirst = 'aaa@bbb@ccc';
console.log(strFirst.replace(/@/g, '!'));

//Second
console.log('Second');
let dateSecond = '2025-12-31';
console.log(dateSecond.replace(/(2025)-(12)-(31)/g, '$3/$2/$1'));

