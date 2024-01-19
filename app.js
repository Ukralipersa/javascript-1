const user = {
	name: 'Вася',
	age: 40,
	city: 'Moscow',
};

const { age, ...userWithoutAge } = user;
console.log(age);
console.log(userWithoutAge);

const additionalData = {
	skills: ['Разработка', 'Дизайн'],
	creditCard: '1234-5678-1234-5678',
};

user.test = 'sdfs';

// user = {
// 	...user,
// 	...additionalData,
// };

console.log(user);
