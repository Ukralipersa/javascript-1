/*
Вася положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц.
Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после снятия вклада. И остаток после покупки.
Итог - Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
*/

//Данные
const deposit = 12000;
const yearPercent = 0.07;
const periodOfDeposit = 24;
const priceHouse = 13500;
const monthOfYear = 12;

//Расчет
const monthPercent = yearPercent / monthOfYear;
const income = deposit * (1 + monthPercent) ** periodOfDeposit;

if (priceHouse < income) {
	console.log(`Доход ${income}.
Вася сможет купить дом за ${priceHouse}$ через 2 года после снятия вклада.
Остаток ${income - priceHouse}`);
} else {
	console.log(`Доход ${income}.
Вася не сможет купить дом за ${priceHouse}$ через 2 года после снятия вклада`);
}
