	//Using the JavaScript language, have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol. 

// initial solution
function NumberSearch (str) {
	var total = 0;
	var splitStr = str.split(/[A-z]\s/);
	console.log(splitStr);
	
	for(var i = 0; i < splitStr.length; i++) {
			total = total + +splitStr[i];
	}
	return total;
}

NumberSearch('1 2 3 4 k10');



//  :/  fuck, got hammered on this one
//1. When the input was "1 2 3 4 k10" your output was incorrect.
//2. When the input was "Won90 8" your output was incorrect.
//3. When the input was "8pop2 1" your output was incorrect.
//4. When the input was "One12 12" your output was incorrect.
//5. When the input was "1 1 1 7 yes" your output was incorrect.
//6. When the input was "no numbers sorry**" your output was incorrect.

//should be searching for digits using regex, not characters 
// for the split.  or split at white spaces too
//also, be able to account for no numbers



//first set a total as 0
//next make an array by finding any length of digits (\d+)
//add g to search globally through string, rather than find
//first match and stop

//loop through all the string nums, adding the numified version
//to total
function numSearch (str) {
	var total = 0;
	var nums = str.match(/\d+/g);
	
	for(var i = 0; i < nums.length; i++) {
		total += +nums[i];
	}
	console.log(nums, ' nums');
	return total;
}

testStr1= '1 2 3 4 k10';
numSearch(testStr1);