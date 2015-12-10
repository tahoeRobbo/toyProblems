//Description:
//
//Welcome. In this kata, you are asked to square every digit of a number.
//
//For example, if we run 9119 through the function, 811181 will come out.
//
//Note: The function accepts an integer and returns an integer

function squareEveryDigit (num) {
	return parseInt(("" + num).split('').map(function(num){
		return num *= num;
	}).join(''), 10);
}

squareEveryDigit(9119);

//rewritten in es2015

var squareEveryDigit = num => parseInt(("" + num).split('').map(num => num*= num).join('') ,10);


squareEveryDigit(9119);	