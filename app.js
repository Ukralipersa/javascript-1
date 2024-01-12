/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

//Данные
const pricePerHour = 80; //dollars
const hoursPerDay = 5; // hours
const Orderhours = 40; // hours
const iHaveDays = 11; //days
const iHaveWeekend = 2; //days

//Расчет
const iHaveWorkDay = iHaveDays - iHaveWeekend;
const iHaveHours = iHaveWorkDay * hoursPerDay;
const isAccepted = iHaveHours > Orderhours;
const resultPriceOrder = Orderhours * pricePerHour;

//Результат
console.log('isAccepted:', isAccepted);
console.log('resultPriceOrder:', resultPriceOrder);
