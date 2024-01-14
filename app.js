/*
Дан произвольный url - 
'https://purpleschool.ru/course/javascript'
Нужно сделать функцию, которая выводит в консоль:
- Протокол (https)
- Доменное имя (purpleschool.ru)
- Путь внутри сайта (/course/javascript)
*/
const url = 'https://purpleschool.ru/course/javascript';

function getUrlParts(string) {
	const protocol = string.split('://', 1);
	if (protocol[0] === 'https' || protocol === 'http') {
		const [, , domen, ...others] = string.split('/');
		others[0] = '/' + others[0];
		const path = others.join('/');
		console.log(`Протокол (${protocol[0]})`);
		console.log(`Доменное имя (${domen})`);
		console.log(`Путь внутри сайта (${path})`);
	}
}

getUrlParts(url);
