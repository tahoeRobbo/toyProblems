var gimme = function (inputArray) {
    var sorted = inputArray.slice().sort(function(a,b){return a - b});
   
    return inputArray.indexOf(sorted[1]);
    
};
var testArr1=[1,6,5];
gimme(testArr1);

//more concise answer -- remove sorted as a variable

function gimme (arr){
	return arr.indexOf(arr.slice().sort(function(a,b){return a - b;})[1]);
}
testArr1=[1,5,1];
gimme(testArr1);

given an array with three numbers, return the index of the middle number.  Assume that all numbers in the array will be unique.

ex.  [1, 6, 5] // 2


bonus -- write it all in one line.
