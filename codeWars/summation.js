//Make a program that will take an int (x) and give you the summation of all numbers from 1 up to x included. If the given input is not an integer, return "Error 404".
//
//Examples:
//
//summation(25)==325
//summation(2.56)=="Invalid Value"
//The next problem in this series: Summation:2 (Link will be soon in once it is created)

function summation(x){
	if(x % 1 !== 0) {return "Invalid Value";}
	
	var total = 0;
	while(x > 0){
		total += x;
		x -= 1;
	}
	
	return total;
}

//much better solution -- need to remember the math function for summing series to x 
const summation = x => Number.isInteger(x) ? x * (x + 1)/2 : 'Invalid Value';