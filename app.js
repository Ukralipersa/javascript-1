/* проверить является ли это номером России */
/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = '+7(910) 323-53-56   ';
/* неверные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function isPhoneNumber(num) {
	let numArray = num.split('');
	let cleanNum = [];
	for (let i = 0; i < numArray.length; i++) {
		if (!isNaN(Number(numArray[i])) && numArray[i] !== ' ') {
			cleanNum.push(numArray[i]);
		}
	}
	let numString = cleanNum.join('');
	if ((numString.slice(0, 4) === '8910' || numString.slice(0, 4) === '7910') && numString.slice(4).length === 7) {
		return true;
	} else return false;
}

console.log(isPhoneNumber(num5));
console.log(isPhoneNumber(num4Error));
