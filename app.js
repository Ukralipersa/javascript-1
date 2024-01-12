const bmwPrice = 100000;
fordPrice = 10000;
const budget = 20000;

let message = budget > bmwPrice ? 'BMW' : budget > fordPrice ? 'Ford' : 'Bike';

console.log(`Я хочу купить ${message}`);
