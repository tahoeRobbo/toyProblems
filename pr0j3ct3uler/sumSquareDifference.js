//The sum of the squares of the first ten natural numbers is,
//
//12 + 22 + ... + 102 = 385
//The square of the sum of the first ten natural numbers is,
//
//(1 + 2 + ... + 10)2 = 552 = 3025
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const sumSquareDifference = (n) => {
	'use strict';
	let squareSums = 0;
	let sumSquared = 0;
	
	for(let i = 1; i <= n; i++){
		squareSums += i*i;
		sumSquared += i;
	}
	

	return sumSquared * sumSquared - squareSums;
};
//25164150