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
for(i = 0; i < arrForth.length; i++) {
    sumForth += Math.pow(arrForth[i], 3);
}
console.log(Math.sqrt(sumForth));

//Fifth
console.log('Fifth');
let a = +prompt('Введите первое число'),
    b = +prompt('Введите второе число'),
    c = a - b;
console.log(Math.abs(c));

//Sixth
console.log('Sixth');
let dateNow = new Date();
function getZero(d){
	if (d > 0 && d < 10) { 
		return '0' + d;
	} else {
		return d;
	}
}

console.log(dateNow.getHours() + ':' + dateNow.getMinutes() + ':' + dateNow.getSeconds() + ' ' + getZero(dateNow.getDate()) + '.' + getZero(dateNow.getMonth() + 1) + '.' + dateNow.getFullYear());