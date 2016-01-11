//Find the difference between the sum of the squares of the first n natural numbers (1 &lt;= n &lt;= 100) and the square of their sum. For example, when n = 10:
//
//1**2 + 2**2 + ... + 10**2 = 385
//
//The square of the sum of the first ten natural numbers is,
//
//(1 + 2 + ... + 10)**2 = 55**2 = 3025
//
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.
//
//Example (Ruby)
//
//difference_of_squares(10)
//# =&gt; 2640

//best solution -- great use of equations 
//(x * (x + 1)) / 2 => add first n numbers in sequence
//(x * (x + 1) * (2x + 1)) / 6 => add first squared nubers in a series
const differenceOfSquares = x => Math.pow(x * (x + 1) / 2, 2) - x * (x + 1) * (2 * x + 1) / 6;

//first solution, usinga while loop like a kook
const differenceOfSquares = n => {
	let squareSum = 0;
	let sumThenSquare = 0;
	
	while(n > 0){
		squareSum += n*n;
		sumThenSquare += n;
		n -= 1;
	}
	
	return Math.abs(squareSum - (sumThenSquare * sumThenSquare));
};

//project euler eh... math puzzles using programming