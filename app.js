/*
Дан список задач
const tasks = ['Задача 1'];
Сделать функции:
- Добавление задачи в конец
- Удаление задачи по названию
- Перенос задачи в начало списка по названию
Всегда меняем исходный массив
 */

const tasks = ['Задача 1'];

function addTaskToEnd(task) {
	tasks.push(task);
}

function deleteTask(task) {
	const itemIndex = tasks.indexOf(task);
	if (itemIndex >= 0) {
		tasks.splice(itemIndex, 1);
	} else return 'Такой задачи в списке нет';
}

function transferTaskToStart(task) {
	const itemIndex = tasks.indexOf(task);
	if (itemIndex >= 0) {
		tasks.splice(itemIndex, 1);
		tasks.unshift(task);
	} else return 'Такой задачи в списке нет';
}

addTaskToEnd('Задача 2');
addTaskToEnd('Задача 3');
console.log(tasks);
deleteTask('Задача 2');
console.log(tasks);
transferTaskToStart('Задача 3');
console.log(tasks);
