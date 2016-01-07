//Create a function isDivisible(n,x,y) that checks if a number n is divisible by two numbers x AND y
//
//Example:
//isDivisible(3,1,3)--> true because 3 is divisible by 1 and 3
//isDivisible(12,2,6)--> true because 12 is divisible by 2 and 6
//isDivisible(100,5,3)--> false because 100 is not divisible by 3
//isDivisible(12,7,5)--> false because 12 is neither divisible by 7 nor 5


//more concise
const isDivisible = (n, x, y) => 
	!( n%x || n%y )

//first solution
const isDivisible = (n, x, y) => 
	(!(n % x) && !(n % y)) ? 'true' : 'false';
//dont even need this evaluator -- will already send back true or false -- but the real versions
	

