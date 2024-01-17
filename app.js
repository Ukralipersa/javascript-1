/*Вытащить имя и фамилию в отдельные переменные */
const userName = 'Вася aka Terminator Пупкин';
const firstName = userName.slice(0, userName.indexOf(' '));
console.log('firstName:', firstName);
const lastName = userName.slice(userName.lastIndexOf(' ') + 1);
console.log('lastName:', lastName);
