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
		return tasks.splice(itemIndex, 1);
	} else return false;
}

function transferTaskToStart(task) {
	const res = deleteTask(task);
	if (res) {
		tasks.unshift(res[0]);
	} else return false;
}

addTaskToEnd('Задача 2');
addTaskToEnd('Задача 3');
console.log(tasks);
deleteTask('Задача 2');
console.log(tasks);
transferTaskToStart('Задача 3');
console.log(tasks);
