//Using the JavaScript language, have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16. 

function PrimeTime (num) {
	if(num <= 3) {
		return true;
	}
	if(num % 2 !== 0 && num % 3 !==0) {
		return true;
	}
	return false;
}

var results = [];
results.push(PrimeTime(-2));//true
results.push(PrimeTime(4));//false
results.push(PrimeTime(7));//true

results.unshift('key -- T, F, T');
console.log(results);
