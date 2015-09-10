//Using the JavaScript language, have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4. 


//solved using a recursive function
var count = 0;
function MultiplicativePersistence(num) {
	if(num < 10) {
		return count;
	}
	
	var total = 1;
	var splitNum = num.toString().split('');
	for(var i = 0; i < splitNum.length; i++){
		total = total * +splitNum[i];
		console.log(total, ' tot');
	}
	count +=1;
	return MultiplicativePersistence(total);
}

MultiplicativePersistence(25);//2

