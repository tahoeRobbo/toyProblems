//Given few numbers, you need to print out the digits that are not being used.
//
//Example:
//
//unusedDigits(12, 34, 56, 78) // "09"
//unusedDigits(2015, 8, 26) // "3479"
//Note:
//
//Result string should be sorted
//The test case won't pass Integer with leading zero


function unusedDigits () {
	
	var str = Array.prototype.slice.call(arguments).toString();
	console.log(str, 'str');
	var digits = [0,1,2,3,4,5,6,7,8,9];
	
	for(var i = 0; i < str.length; i++){
		if(digits.indexOf(str[i])){
			digits[digits.indexOf(+str[i])] = undefined;
		}
	}
	
	console.log(digits);
  
  return digits.filter(function(val){
			{ return val || val === 0; }
	}).join('');
  
}
unusedDigits(12,34,56,78);

//damn.. so many better solutions. especially using the es6 (...a)

//function unusedDigits(...a){
//  return `0123456789`.split('').filter(b=>`${a}`.split('').indexOf(b)==-1).join('');
//}

