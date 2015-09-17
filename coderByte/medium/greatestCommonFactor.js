//Using the JavaScript language, have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor. That is, return the greatest number that evenly goes into both numbers with no remainder. For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3. 

//accomplished using a recursive function of the euclidean algorithm 
var remainders = [];
function Division(num1, num2) {
	if(num1 === 0){
		return remainders[remainders.length-2];
	}
	
	var remainder = num2 % num1;
	remainders.push(remainder);
	
		if(remainder === 0 && remainders.length === 1) {
		return num1;
	}
	
	num2 = num1;
	num1 = remainder;
	console.log(remainder, ' remainder', remainders, 'remainders')

	return Division(num1, num2);
}

Division(15,60);//15
Division(14,28);//14
Division(12, 16);//4
Division(216, 594);//54



//JackGeek's solution (damn hes good)

function Division(num1,num2) { 
  var min = Math.min(num1, num2);
  for (var i = min; i > 0; i--) {
    if ((num1 / i % 1 === 0) && (num2 / i % 1 === 0)) {
      return i;
    }
  }
}