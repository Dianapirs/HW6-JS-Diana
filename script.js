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

//Forth
console.log('Forth');
let arrForth = [4, 2, 5, 19, 13, 0, 10];
let sumForth = 0;
for(a = 0; a < arrForth.length; a++) {
    sumForth += Math.pow(arrForth[a], 3);
}
console.log(Math.sqrt(sumForth));