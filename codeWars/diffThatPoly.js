//Description:
//
//Calculus class...is awesome! But, you are a programmer with no time for mindless repetition. Your teacher spent a whole day covering differentiation of polynomials, and by the time the bell rang, you had already conjured up a program to automate the process.
//
//You realize that a polynomial of degree n
//
//anxn + an-1xn-1 + ... + a0
//
//can be represented as an array of coefficients
//
//[an, an-1, ..., a0]
//
//For example, we would represent
//
//5x2 + 2x + 1 as [5,2,1]
//
//3x2 + 1 as [3,0,1]
//
//x4 as [1,0,0,0,0]
//
//x as [1, 0]
//
//1 as [1]
//
//Your function will take a coefficient array as an argument and return a new array representing the coefficients of the derivative.
//
//var poly1 = [1, 1] // x + 1
//diff(poly1) === [1] // 1
//
//var poly2 = [1,1,1] // x^2 + x + 1
//diff(poly2) === [2,1] // 2x + 1
//diff(diff(poly2)) === [2] // 2
//
//var poly3 = [2,1,0,0] // 2x^3 + x^2
//diff(poly3) === [6,2,0] // 6x^2 + 2x

function diff(poly) {
	var res = [];
	
	for(var i = 0, len = poly.length - 1; i < len; i++){
		res.push(poly[i] * (poly.length - 1 - i));
	}
	
	return res;
}
