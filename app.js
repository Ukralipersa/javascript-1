/*
Реализовать методы увеличения и уменьшения баланса,
при которых каждая операция сохраняется в массив
operations в виде { reason: 'Оплата налогов', sum: -100 }.
Возвращается true, если успешно и false, если не хватает баланса.
Так же реализовать метод вызова числа операций по кошельку
*/

const wallet = {
	balance: 0,
	operations: [],
	plusBalance: function (reason, sum) {
		this.balance += sum;
		this.operations.push({ reason: reason, sum: sum });
		return true;
	},
	minusBalance: function (reason, sum) {
		if (sum > this.balance) {
			console.log('Недостаточно баланса');
			return false;
		} else {
			this.balance -= sum;
			this.operations.push({ reason: reason, sum: -sum });
			return true;
		}
	},
	countOperations: function () {
		return `Число операций кошелька: ${this.operations.length}`;
	},
};

console.log(wallet.plusBalance('Зарплата', 500));
console.log(wallet.plusBalance('Премия', 100));

console.log(wallet.minusBalance('Коммунальные услуги', 50));
console.log(wallet.minusBalance('Покупка продуктов', 150));
console.log(wallet.minusBalance('Покупка iphone', 1000));

console.log(wallet);
console.log(wallet.countOperations());
