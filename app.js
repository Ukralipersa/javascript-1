/*
Сделать объект склад с методами добавления на склад,
поиска по складу и расчет веса
*/
const warehouse = {
	goods: [],
	findGoodByID: function (id) {
		for (let i = 0; i < this.goods.length; i++) {
			if (this.goods[i].id === id) {
				return console.log(this.goods[i]);
			}
		}
		return console.log(`Товара с id:${id} на складе нет`);
	},
	addGood: function (good) {
		const existedGood = this.goods.find(item => item.id === good.id);
		if (existedGood) {
			console.log(`Товар c id:${good.id} уже есть на складе`);
			return;
		}
		this.goods.push(good);
		console.log(`Товар c id:${good.id} успешно добавлен`);
	},
	getWeightKg: function () {
		let weight = 0;
		for (let i = 0; i < this.goods.length; i++) {
			if (this.goods[i].weight?.kg) {
				weight = weight + this.goods[i].weight.kg;
			}
		}
		return console.log(`Общий вес товаров на складе составляет ${weight}кг`);
	},
};

/* товары */

const car = {
	id: 1,
	weight: {
		kg: 1000,
	},
	brand: 'Ford',
};

const chair = {
	id: 2,
	weight: {
		kg: 2,
	},
};

const paper = {
	id: 3,
	color: 'red',
};

warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
warehouse.addGood(paper);
warehouse.findGoodByID(1);
warehouse.findGoodByID(2);
warehouse.findGoodByID(3);
warehouse.findGoodByID(4);
warehouse.getWeightKg();
