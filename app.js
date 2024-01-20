'use strict';

let firstName = 'Anton';
let firstName2 = firstName;
firstName2 = 'new';
console.log(firstName);
console.log(firstName2);

const user1 = {
	name: 'Anton',
};
const user2 = user1;
user2.name = 'new';
console.log(user1);
console.log(user2);
