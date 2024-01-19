/* 
преобразовать пользователей до вида
{ fullname: "Вася Пупкин", skillNum: 2 }
*/

const users = [
	{ name: 'Вася', surname: 'Пупкин', age: 30, skills: ['Разработка', 'DevOps'] },
	{ name: 'Катя', surname: 'Белова', age: 18, skills: ['Дизайн'] },
];

const changedUsers = users.map(user => {
	return {
		fullname: `${user.name} ${user.surname}`,
		skillNum: user.skills.length,
	};
});

console.log(changedUsers);
