/*
Найти среднее значение последовательности
чисел с помощью reduce
*/
const arr = [1, 4, 4, 10];

const avg = arr.reduce((acc, val, i, arr) => {
	acc += val;
	if (i === arr.length - 1) {
		acc = acc / arr.length;
	}
	return acc;
}, 0);

console.log(avg);
