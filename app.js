/* Замаскировать все, кроме последних 4х символов */
let card = '2342834593458353';
/* ************8353 */

console.log(card.length);

function hideCard(card) {
	return card.slice(-4).padStart(16, '*');
}

console.log(hideCard(card));
