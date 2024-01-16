/*
Написать функцию, которая возвращает true,
если элемент есть, и false, если нет.
*/

const arr = [2, 4, 4, 10, 20];

function some(array, el) {
	let index = array.findIndex(val => val === el);
	if (index !== -1) {
		return true;
	} else return false;
}

console.log(some(arr, 10));

console.log(arr.some(el => el === 2));
