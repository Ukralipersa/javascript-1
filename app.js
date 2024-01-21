/*
Дополнить объект методами для получения имени:
- компании
- сео
- сотрудника
*/

const company = {
	name: 'OOO Агро',
	employee: [
		{
			name: 'Света',
			workerName: function () {
				console.log(this.name);
			},
		},
	],
	ceo: {
		name: 'Вася',
		ceoName: function () {
			console.log(this.name);
		},
	},
	nameCompany: function () {
		console.log(this.name);
	},
};

company.nameCompany();
company.ceo.ceoName();
company.employee.forEach(employee => employee.workerName());
