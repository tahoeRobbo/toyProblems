//Create a function that returns True if a given number is divisible by 4, otherwise it should return False.

//es2015 solution
const divisibleByFour = num => 
	(num % 4 === 0) ? true : false;

//es5 solution 
function divisibleByFour (num) {
	return (num % 4 === 0) ? true : false;
}

//cool other solution -- if num % 4 has a remainder (evals true), return false.  if num%4 evals to 0, return true.  clever
const divisibleByFour = num => !(num%4);