//Background
//
//While mpg (miles per gallon) is a common unit of measurement for fuel economy in North America, for Europe the standard unit of measurement is generally liter per 100 km. Conversion between these units is somewhat hard to calculate in your head, so your task here is to implement a simple convertor in both directions.
//
//Functions
//
//mpg2lp100km() converts from miles per gallon to liter per 100 km.
//lp100km2mpg() converts in the opposite direction.
//Output
//
//The output of both functions should be a number rounded to 2 decimal places.
//
//Examples
//
//mpg2lp100km(42) returns 5.6
//lp100km2mpg( 9) returns 26.13
//Reference
//
//For this kata, use U.S. gallon, not imperial gallon.
//
//1 gallon = 3.785411784 liters
//1 mile = 1.609344 kilometers
//Algorithms

//working function
function mpg2lp100km(mpg){
  var lp100k =  ((100 * 3.785411784) / (1.609344 * mpg)).toFixed(2);
	
	return lp100k[lp100k.length - 1] === 0 ? lp100k.toFixed(1) : lp100k;
}

function lp100km2mpg(l){
  var mpg =  ((100 * 3.785411784) / (1.609344 * l)).toFixed(2);
	
 return mpg[mpg.length - 1] === 0 ? mpg.toFixed(1) : mpg;
}


////working on es2015 solution
//let mpg2lp100km = (mpg) => 
//	let lp100k = Math.round(((100 * 3.78541) / (1.6093 * mpg))* 100) / 100;
//	lp100k[lp100k.length - 1] === 0 ? lp100k = lp100k.toFixed(1) : lp100k = lp100k;
//
//
//let lp100km2mpg = (l) =>
//	let mpg = Math.round(((100 * 3.78541) / (1.6093 * l)) * 100) / 100;
//
//	mpg[mpg.length - 1] === 0 ?  mpg.toFixed(1) : mpg

//best practice -- 
function mpg2lp100km(x){
  return +(378.5411784 / x / 1.609344).toFixed(2);
}

var lp100km2mpg = mpg2lp100km;