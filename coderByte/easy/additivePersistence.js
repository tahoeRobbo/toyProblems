//Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 


//solved using a recursive function
var count = 0;
function AdditivePersistence(num) {
	if(num < 10) {
		return count;
	}
	
	
	var total = 0;
	var splitNum = num.toString().split('');
	for(var i = 0; i < splitNum.length; i++) {
		total = total + +splitNum[i];
		console.log(total);
	}
	
	count +=1;
	return AdditivePersistence(total);
}
console.log(count);

AdditivePersistence(69); //2
AdditivePersistence(9); //0
