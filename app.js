const user = {
	name: 'Вася',
	surname: 'Пупкин',
	age: 24,
	getFullName: function () {
		return this.name + ' ' + this.surname;
	},
};

const getFullName = function (user) {
	return user.name + ' ' + user.surname;
};

console.log(user.getFullName());
