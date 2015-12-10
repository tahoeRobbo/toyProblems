//Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 

function SecondGreatLow(arr) {
	var sorted = arr.sort(function(a,b){return a - b;});
	var filtered = [];
	for(var i = 0; i < sorted.length; i++) {
		if(filtered.indexOf(sorted[i]) === -1){
			filtered.push(sorted[i]);
		}
	}
	var res = [];
	res.push(filtered[filtered.length - 2]);
	res.unshift(filtered[1]);
	res.sort(function(a,b){return a - b;});
	res.join(' ');
	return res;
}

SecondGreatLow(2,2,2,5,5,5,6);

var results = [];
var testArr = [1,22,4,69,30];
var testArr2 = [22,54];
results.push(SecondGreatLow(testArr));
results.push(SecondGreatLow(testArr2));
results.push(SecondGreatLow([7,7,12,98,106]));
console.log(results, '22,69 ; 22,54; 12,98');



//WTF THIS IS FUCKING BULLSHIT

//1. When the input was (1,2,2,3) your output was incorrect.
//2. When the input was (2,2,2,5,5,5,6) your output was incorrect.
//3. When the input was (100, 30, 6) your output was incorrect.
//4. When the input was (78, 90, 100, 1, 2) your output was incorrect.
//5. When the input was (-4, -5, 10, 2) your output was incorrect.
//6. When the input was (100, 200, 3, 400, 5, 1) your output was incorrect.
//7. When the input was (4, 60, 7, 188) your output was incorrect.
//8. When the input was (80, 80) your output was incorrect.
//9. When the input was (90, 23) your output was incorrect.
//10. When the input was (7, 7, 90, 1000003) your output was incorrect.

















