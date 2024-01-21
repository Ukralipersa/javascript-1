'use strict';

/* 
Создайте объект пользователя с паролем.
С помощью функции ниже удалить пароль сделав
функцию сброса пароля
*/

function removePassword(reset) {
	if (reset) {
		this.password = undefined;
	} else {
		this.password = '1';
	}
}

const user = {
	name: 'Kate',
	password: 123456,
};

const removePasswordForUser = removePassword.bind(user);
removePasswordForUser(true);
console.log(user);
