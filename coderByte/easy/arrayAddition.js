//Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers. 
//
//Use the Parameter Testing feature in the box below to test your code with different arguments.


//Initial solution -- 4 pts for correctness

//When the input was (1,2,3,4) your output was incorrect.
//2. When the input was (54,49,1,0,7,4) your output was incorrect.
//3. When the input was (3,4,5,7) your output was incorrect.
//friggin toughy!

function ArrayAdditionI(arr) {
	function compare(a,b) {
		return a - b
	}
	var sortedArr = arr.sort(compare);
	var highestNum = sortedArr.pop();
	console.log(highestNum);
	console.log(sortedArr);
	
	var highestTotal = 0;
	for(var i = 0; i < sortedArr.length; i++) {
		highestTotal += sortedArr[i];
	}
	console.log(highestTotal, ' hT')
	if(highestTotal < highestNum) {
		return false;
	}
	if(highestTotal === highestNum) {
		return true;
	}
	if(highestTotal > highestNum) {
		var recSubTotal = highestNum;
		console.log(recSubTotal, ' rST from if highestTotal >');
		function recursiveSubtractor(sortedArr) {
			if(recSubTotal === 0){
				return true;
			}
			for(var j = sortedArr.length; j > 0; j--) {
				if((recSubTotal -= sortedArr[j]) >= 0) {
					 recSubTotal -= sortedArr[j]
					 } 
				if((recSubTotal -= sortedArr[j]) < 0 ){
					for(var k = 0; k < sortedArr.length - j; k++ ) {
						function recAdder(sortedArr) {
							if(recSubTotal === 0) {
								return true;
							}
							if((recSubTotal += sortedArr[k]) > 0 ) {
							return false;
						}	
							if((recSubTotal += sortedArr[k]) <= 0) {
								recAdder(sortedArr);
							}
						}

					}
				}
			}
			
			recursiveSubtractor(sortedArr);
		}
		recursiveSubtractor(sortedArr);
	}
	return false;
	
}

var testArr = [1,2,3,4,22];
var testArr2 = [1,2,3,4,10];
ArrayAdditionI(testArr2);