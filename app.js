/*
Есть выгрузка операций пользователя
const operations = [1000, -700, 300, -500, 10000];
а так же начальный баланс в 100$
Необходимо сделать функции расчета:
- Итогового баланса
- Наличия отрицательного баланса (если после очередной операции
		баланс < 0, то выдавать false)
- Расчета среднего расхода и среднего дохода
*/
const operations = [1000, -700, 300, -500, 10000];

function closeBalance(operations, startMoney) {
	let finishMoney = startMoney;
	for (let element of operations) {
		finishMoney += element;
		if (finishMoney < 0) {
			return false;
		}
	}
	return finishMoney;
}
// console.log(closeBalance(operations));

function averageCost(operations) {
	let negative = 0;
	let count = 0;
	let res;
	for (let i = 0; i < operations.length; i++) {
		if (operations[i] < 0) {
			negative += operations[i];
			count++;
		}
	}
	if (count > 0) {
		return (res = negative / count);
	}
}
// console.log(averageCost(operations));
function averageIncome(operations) {
	let positive = 0;
	let count = 0;
	let res;
	for (let i = 0; i < operations.length; i++) {
		if (operations[i] > 0) {
			positive += operations[i];
			count++;
		}
	}
	if (count > 0) {
		return (res = positive / count);
	}
}
console.log(averageIncome(operations));
