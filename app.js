const transactionsInUSD = [10, -7, 50, -10, 100];

const transactionsInRUB = [];
for (const transaction of transactionsInUSD) {
	transactionsInRUB.push(transaction * 60);
}

// console.log(transactionsInUSD);
// console.log(transactionsInRUB);

const transactionsInRUB2 = transactionsInUSD.map((transaction, i) => {
	console.log(i);
	return transaction * 60;
});
console.log(transactionsInUSD);
console.log(transactionsInRUB2);
