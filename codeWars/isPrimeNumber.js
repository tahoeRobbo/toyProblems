//Description:
//
//Is Prime
//
//Define a function isPrime that takes one integer argument and returns true or false depending on if the integer is a prime.
//
//Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
//
//Example
//
//isPrime(5)
//=> true
//Assumptions
//
//You can assume you will be given an integer input.
//You can not assume that the integer will be only positive. You may be given negative numbers.

const isPrime = function(num) {
	const sOE = function(n){
		let temp = [];
		let primes = [];
		let upperLimit = Math.sqrt(n);
		
		for(let i = 1; i < n; i++){
			temp.push(true);
		}
		
		for(let j = 2; j < upperLimit; j++){
			if(temp[j]){
				for(let k = j*j; k < n; k += j){
					temp[k] = false;
				}
			}
		}
		
		for(let l = 2; l < n; l++){
			if(temp[l]){
				primes.push(l);
			}
		}
		return primes;
	}
	let primes = sOE(100000);
	
	primes.indexOf(num) >= 0 ?  true : false;
	
};


//ooooh i like this one
//-- by number basis, no need to generate list of primes
//loop up to that number, modulus by aech, if ever is clean return false;
function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i == 0) return false;
  return num >= 2; 
}