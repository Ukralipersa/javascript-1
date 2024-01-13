/*
Пользователь хочет приобрести игру в магазине
Он может это сделать только если:
- Его баланс больше 1000 (balance)
или число бонусов больше 100 (bonusBalance)
- Он не забанен (isBanned)
- Игра не куплена (isExist)
- Игра в продаже (isSelling)
Напишите условие для покупки и выведите в консоль
результат
 */

const balance = 900;
const bonus = 150;
const isBanned = false;
const isExist = false;
const isSelling = true;

if ((balance > 1000 || bonus > 100) && !isBanned && !isExist && isSelling) {
	console.log(`Пользователь может купить игру`);
} else {
	console.log(`Пользователь не может купить игру`);
}
