Description:
//
//Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. Input to the function is guaranteed to be a single string.
//
//Examples of valid inputs: 1.2.3.4 123.45.67.89
//
//Examples of invalid inputs: 1.2.3 1.2.3.4.5 123.456.78.90 123.045.067.089

//works, but is bulky
const isValidIP = function(str){
	let arr = str.split('.');
	if(arr.length !== 4){return false;}
	for(var i = 0; i < 4; i++){
		if(arr[i] < 0 || arr[i] >255 || /\D/.test(arr[i])){
			return false;
		}
	}
	return true;
};

//don't really understand why this one doesn't work..
//gets hung up on the 0.0.0.0 test, which i think should pass
const isValidIP = function(str){
	let arr = str.split('.').filter(num => +num >= 0 && +num <= 255 && /^\D/.test(num));
	(arr.length === 4) ? true : false
};

//above function reduced to a one-liner -- still don't get why it doesn't work
const isValidIP = (str) => 
	str.split('.').filter(num => +num >=0 && +num <=255 && /^\D/.test(num)).length === 4;