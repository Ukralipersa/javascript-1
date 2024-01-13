/*
Пользователь:
- Возраст
- Наличие работы
- Деньги
Нужно првоерить может ли он купить новый MacBook за 2000$?
Он может брать не только свои деньги, но и взять кредит.
Ему дадут 500$, только если ему больше 24-х лет и он
имеет работу, 100$ если ему просто больше 24-х лет и 0 в
ином случае.
Напишите функцию, которая принимает данные пользователя
и товара и возвращает true или false;
*/

const userAge = 25;
const hasJob = false;
const userMoney = 1900;
const priceMac = 2000;

function calcCredit(userAge, hasJob = false) {
	if (userAge > 24 && hasJob === true) {
		return 500;
	} else if (userAge > 24) {
		return 100;
	} else return 0;
}

function canBuyMac(userAge, hasJob, userMoney, priceMac) {
	const credit = calcCredit(userAge, hasJob);
	return credit + userMoney >= priceMac;
}

console.log(canBuyMac(userAge, hasJob, userMoney, priceMac));
